import { type Rule, type Scope } from 'eslint';
import {
	type BinaryExpression,
	type Expression,
	type IfStatement,
} from 'estree';

function getValidDivisorIdentifierName({
	left,
	operator,
	right,
}: BinaryExpression): string | null {
	const validTestOperator: boolean =
		operator === '>' ||
		operator === '<' ||
		operator === '!==' ||
		operator === '!=';

	/**
	 * This rule assumes that the literal value is on the right side of the operator
	 */
	const validTestValue: boolean = right.type === 'Literal' && right.value === 0;

	return validTestOperator && validTestValue && left.type === 'Identifier'
		? left.name
		: null;
}

const noUnsafeDivision: Rule.RuleModule = {
	create(context: Rule.RuleContext): Rule.NodeListener {
		const validDivisorIdentifierNames = new Set<string>();

		return {
			BinaryExpression: (
				node: BinaryExpression & Rule.NodeParentExtension,
			): void => {
				if (node.operator !== '/') {
					return;
				}

				const divisor: Expression = node.right;

				if (
					(divisor.type !== 'Literal' || divisor.value !== 0) &&
					(divisor.type !== 'Identifier' ||
						validDivisorIdentifierNames.has(divisor.name))
				) {
					return;
				}

				context.report({
					messageId: 'noUnsafeDivision',
					node,
				});
			},
			IfStatement: (node: IfStatement & Rule.NodeParentExtension): void => {
				if (node.test.type !== 'BinaryExpression') {
					return;
				}

				const validDivisorIdentifierName: string | null =
					getValidDivisorIdentifierName(node.test);

				if (validDivisorIdentifierName === null) {
					return;
				}

				context.sourceCode
					.getScope(node)
					.variables.forEach(({ name }: Scope.Variable): void => {
						if (name === validDivisorIdentifierName) {
							validDivisorIdentifierNames.add(name);
						}
					});
			},
		};
	},
	meta: {
		messages: {
			noUnsafeDivision:
				'Unsafe division is forbidden. Ensure that the divisor is non-zero.',
		},
		type: 'problem',
	},
};

export default noUnsafeDivision;
