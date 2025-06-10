import { FILES_GLOB_JS_TS } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'airbnb/stylistic/errors',
	rules: {
		// disallow unnecessary parentheses
		// https://eslint.style/rules/default/no-extra-parens
		'@stylistic/no-extra-parens': [
			'off',
			'all',
			{
				conditionalAssign: true,
				enforceForArrowConditionals: false,
				ignoreJSX: 'all', // delegate to eslint-plugin-react
				nestedBinaryExpressions: false,
				returnAssign: false,
			},
		],

		// disallow unnecessary semicolons
		// https://eslint.style/rules/default/no-extra-semi
		'@stylistic/no-extra-semi': 'error',
	},
};

export default rules;
