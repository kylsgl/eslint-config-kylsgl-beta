import { type Rule } from 'eslint';
import {
	type AssignmentExpression,
	type BinaryExpression,
	type ConditionalExpression,
	type IfStatement,
	type Node,
	type Statement,
	type VariableDeclaration,
	type VariableDeclarator,
} from 'estree';

import { type NodeWithParent } from '../../../types';

const PASCAL_CASE_REGEXP = /^[A-Z][a-zA-Z0-9]*$/;

const SCREAMING_SNAKE_CASE_REGEXP = /^[A-Z0-9_]+$/;

const VALID_GUARD_EARLY_OPERATORS: ReadonlySet<string> = new Set<string>([
	'<=',
	'==',
	'===',
	'>=',
]);

const VALID_GUARD_OPERATORS: ReadonlySet<string> = new Set<string>([
	'!=',
	'!==',
	'<',
	'>',
]);

function hasValidExitStatement(statement: Statement): boolean {
	return (
		statement.type === 'ReturnStatement' || statement.type === 'ThrowStatement'
	);
}

function hasEarlyExitStatement(ifNode: IfStatement): boolean {
	return (
		hasValidExitStatement(ifNode.consequent) ||
		(ifNode.consequent.type === 'BlockStatement' &&
			ifNode.consequent.body.some(hasValidExitStatement))
	);
}

function isSameDivisorNode(node1: Node, node2: Node): boolean {
	switch (node1.type) {
		case 'Identifier': {
			return node2.type === 'Identifier' && node1.name === node2.name;
		}
		case 'MemberExpression': {
			return (
				node2.type === 'MemberExpression' &&
				isSameDivisorNode(node1.object, node2.object) &&
				isSameDivisorNode(node1.property, node2.property)
			);
		}
		default: {
			return false;
		}
	}
}

function hasValidBinaryExpression(
	testNode: BinaryExpression,
	divisorNode: NodeWithParent,
	earlyExitGuard: boolean,
): boolean {
	const isValidLeftNodeCheck: boolean =
		isSameDivisorNode(testNode.right, divisorNode) &&
		testNode.left.type === 'Literal' &&
		testNode.left.value === 0;

	const isValidRightNodeCheck: boolean =
		isSameDivisorNode(testNode.left, divisorNode) &&
		testNode.right.type === 'Literal' &&
		testNode.right.value === 0;

	const isValidOperator: boolean = (
		earlyExitGuard ? VALID_GUARD_EARLY_OPERATORS : VALID_GUARD_OPERATORS
	).has(testNode.operator);

	return (isValidLeftNodeCheck || isValidRightNodeCheck) && isValidOperator;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function hasValidIfStatement(
	ifNode: ConditionalExpression | IfStatement,
	testNode: Node,
	divisorNode: NodeWithParent,
	earlyExitGuard: boolean,
	isElseBlock: boolean,
): boolean {
	switch (testNode.type) {
		case 'BinaryExpression': {
			const hasExit: boolean =
				earlyExitGuard && ifNode.type === 'IfStatement'
					? isElseBlock || hasEarlyExitStatement(ifNode)
					: true;

			return (
				hasValidBinaryExpression(testNode, divisorNode, earlyExitGuard) &&
				hasExit
			);
		}
		case 'LogicalExpression': {
			const isValidExpressionLeft: boolean = hasValidIfStatement(
				ifNode,
				testNode.left,
				divisorNode,
				earlyExitGuard,
				isElseBlock,
			);

			const isValidExpressionRight: boolean = hasValidIfStatement(
				ifNode,
				testNode.right,
				divisorNode,
				earlyExitGuard,
				isElseBlock,
			);

			if (testNode.operator === '&&') {
				return earlyExitGuard
					? isValidExpressionLeft && isValidExpressionRight
					: isValidExpressionLeft || isValidExpressionRight;
			}

			if (testNode.operator === '||') {
				return earlyExitGuard
					? isValidExpressionLeft || isValidExpressionRight
					: isValidExpressionLeft && isValidExpressionRight;
			}

			return false;
		}
		default: {
			return false;
		}
	}
}

function hasGuardEarly(
	node: NodeWithParent,
	divisorNode: NodeWithParent,
): boolean {
	const handleIfStatement = (statement: Statement): boolean =>
		statement.type === 'IfStatement'
			? hasValidIfStatement(statement, statement.test, divisorNode, true, false)
			: false;

	let currentNode: NodeWithParent = node;

	while (currentNode.parent != null) {
		if (
			currentNode.parent.type === 'BlockStatement' &&
			currentNode.parent.body.some(handleIfStatement)
		) {
			return true;
		}

		currentNode = currentNode.parent;
	}

	return false;
}

/**
 * Handle n
 */
function hasGuard(node: NodeWithParent, divisorNode: NodeWithParent): boolean {
	let currentNode: NodeWithParent = node;

	while (currentNode.parent != null) {
		if (
			(currentNode.parent.type === 'IfStatement' ||
				currentNode.parent.type === 'ConditionalExpression') &&
			hasValidIfStatement(
				currentNode.parent,
				currentNode.parent.test,
				divisorNode,
				currentNode.parent.alternate === currentNode,
				currentNode.parent.alternate === currentNode,
			)
		) {
			return true;
		}

		currentNode = currentNode.parent;
	}

	return false;
}

function hasNonZeroInitializer(
	node: Node,
	nonZeroInitializerNames: Set<string>,
): boolean {
	return node.type === 'Identifier' && nonZeroInitializerNames.has(node.name);
}

function hasPascalCaseCasing(
	node: Node,
	ignorePascalCase: boolean = false,
): boolean {
	if (ignorePascalCase) {
		if (node.type === 'Identifier') {
			return PASCAL_CASE_REGEXP.test(node.name);
		}

		if (node.type === 'MemberExpression' && node.object.type === 'Identifier') {
			return PASCAL_CASE_REGEXP.test(node.object.name);
		}
	}

	return false;
}

function hasScreamingSnakeCasing(
	node: Node,
	ignoreScreamingSnakeCase: boolean = false,
): boolean {
	if (ignoreScreamingSnakeCase) {
		if (node.type === 'Identifier') {
			return SCREAMING_SNAKE_CASE_REGEXP.test(node.name);
		}

		if (node.type === 'MemberExpression' && node.object.type === 'Identifier') {
			return SCREAMING_SNAKE_CASE_REGEXP.test(node.object.name);
		}
	}

	return false;
}

function isSafeDivision(
	node: AssignmentExpression | BinaryExpression,
	nonZeroInitializerNames: Set<string>,
	ignorePascalCase?: boolean,
	ignoreScreamingSnakeCase?: boolean,
): boolean {
	return (
		(node.right.type === 'Literal' && node.right.value !== 0) ||
		/**
		 * Handle divisors with PascalCase
		 */
		hasPascalCaseCasing(node.right, ignorePascalCase) ||
		/**
		 * Handle divisors with SCREAMING_SNAKE_CASE
		 */
		hasScreamingSnakeCasing(node.right, ignoreScreamingSnakeCase) ||
		/**
		 * Handle constant variables initialized with a non-zero value
		 */
		hasNonZeroInitializer(node.right, nonZeroInitializerNames) ||
		/**
		 * Handle early guard if statements: if (divisor === 0) return; 1 / divisor
		 */
		hasGuardEarly(node, node.right) ||
		/**
		 * Handle guard if statements:
		 * if (divisor !== 0) 1 / divisor
		 * if (divisor === 0) 0 else 1 / divisor
		 */
		hasGuard(node, node.right) ||
		/**
		 * Handle nested binary expression cases like: const result = 1 / (1 * 0)
		 */
		(node.right.type === 'BinaryExpression' &&
			isSafeDivision(
				node.right,
				nonZeroInitializerNames,
				ignorePascalCase,
				ignoreScreamingSnakeCase,
			))
	);
}

interface NoUnsafeDivisionOptions {
	readonly ignorePascalCase?: boolean;
	readonly ignoreScreamingSnakeCase?: boolean;
}

const noUnsafeDivision: Rule.RuleModule = {
	create(context: Rule.RuleContext): Rule.NodeListener {
		const opts = context.options.at(0) as NoUnsafeDivisionOptions | undefined;

		/**
		 * Constant variable names with values that are non-zero numbers
		 */
		const nonZeroConstantVariableNames = new Set<string>();

		return {
			AssignmentExpression: (
				node: AssignmentExpression & Rule.NodeParentExtension,
			): void => {
				if (
					(node.operator !== '/=' && node.operator !== '%=') ||
					isSafeDivision(
						node,
						nonZeroConstantVariableNames,
						opts?.ignorePascalCase,
						opts?.ignoreScreamingSnakeCase,
					)
				) {
					return;
				}

				context.report({
					messageId: 'noUnsafeDivision',
					node: node.right,
				});
			},
			BinaryExpression: (
				node: BinaryExpression & Rule.NodeParentExtension,
			): void => {
				if (
					(node.operator !== '/' && node.operator !== '%') ||
					isSafeDivision(
						node,
						nonZeroConstantVariableNames,
						opts?.ignorePascalCase,
						opts?.ignoreScreamingSnakeCase,
					)
				) {
					return;
				}

				context.report({
					messageId: 'noUnsafeDivision',
					node: node.right,
				});
			},
			VariableDeclaration: (
				node: Rule.NodeParentExtension & VariableDeclaration,
			): void => {
				if (node.kind !== 'const') {
					return;
				}

				node.declarations.forEach((variable: VariableDeclarator): void => {
					if (
						variable.id.type === 'Identifier' &&
						variable.init?.type === 'Literal' &&
						variable.init.value !== 0 &&
						typeof variable.init.value === 'number'
					) {
						nonZeroConstantVariableNames.add(variable.id.name);
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
		schema: [
			{
				additionalProperties: false,
				properties: {
					ignorePascalCase: {
						default: false,
						type: 'boolean',
					},
					ignoreScreamingSnakeCase: {
						default: false,
						type: 'boolean',
					},
				},
				type: 'object',
			},
		],
		type: 'problem',
	},
};

export default noUnsafeDivision;
