import { type RuleTester } from 'eslint';

import noDefaultParams from '../rules/no-default-params';
import ruleTester from './ruleTester';

const errors: RuleTester.TestCaseError[] = [{ messageId: 'noDefaultParams' }];

ruleTester.run('no-default-params', noDefaultParams, {
	invalid: [
		{
			code: 'function test(param = 1){}',
			errors,
		},
	],
	valid: ['function test(param){}'],
});
