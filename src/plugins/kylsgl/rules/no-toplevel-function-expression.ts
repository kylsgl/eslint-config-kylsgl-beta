import { type Rule, type Scope } from 'eslint';
import { type VariableDeclarator } from 'estree';

const noTopLevelFunctionExpression: Rule.RuleModule = {
	create(context: Rule.RuleContext): Rule.NodeListener {
		const nodeTypes: ReadonlySet<Rule.NodeTypes> = new Set([
			'ArrowFunctionExpression',
			'FunctionExpression',
		]);

		const scopeTypes: ReadonlySet<string> = new Set(['global', 'module']);

		const hasGlobalReturn: boolean =
			context.languageOptions.parserOptions?.ecmaFeatures?.globalReturn ===
			true;

		return {
			VariableDeclarator: (
				node: Rule.NodeParentExtension & VariableDeclarator,
			): void => {
				const nodeType: Rule.NodeTypes | undefined = node.init?.type;

				if (nodeType === undefined || !nodeTypes.has(nodeType)) {
					return;
				}

				const scope: Scope.Scope | null = context.sourceCode.getScope(node);

				const currentScope: Scope.Scope | null | undefined = hasGlobalReturn
					? scope.upper
					: scope;

				const isTopLevel: boolean =
					currentScope != null && scopeTypes.has(currentScope.type);

				if (!isTopLevel) {
					return;
				}

				context.report({
					messageId: 'noTopLevelExpression',
					node: node.parent,
				});
			},
		};
	},
	meta: {
		messages: {
			noTopLevelExpression:
				'Top-level function expressions are forbidden. Use function declarations instead.',
		},
		type: 'suggestion',
	},
};

export default noTopLevelFunctionExpression;
