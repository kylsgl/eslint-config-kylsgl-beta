import { type RuleTester } from 'eslint';

import noTopLevelFunctionExpression from '../rules/no-toplevel-function-expression';
import ruleTester from './ruleTester';

const errors: RuleTester.TestCaseError[] = [
	{ messageId: 'noTopLevelFunctionExpression' },
];

ruleTester.run(
	'no-toplevel-function-expression',
	noTopLevelFunctionExpression,
	{
		invalid: [
			{
				code: 'const test = () => {}',
				errors,
			},
			{
				code: 'const test = function() {}',
				errors,
			},
			{
				code: 'const test = function test() {}',
				errors,
			},
		],
		valid: [
			'const test = true',
			'function test(){}',
			'function test(){ const testInner = () => {}; }',
		],
	},
);
