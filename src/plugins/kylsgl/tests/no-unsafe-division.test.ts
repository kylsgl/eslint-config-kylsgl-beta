import { type RuleTester } from 'eslint';

import noUnsafeDivision from '../rules/no-unsafe-division';
import ruleTester from './ruleTester';

const errors: RuleTester.TestCaseError[] = [{ messageId: 'noUnsafeDivision' }];

ruleTester.run('no-unsafe-division', noUnsafeDivision, {
	invalid: [
		{
			code: '1 / 0',
			errors,
		},
		{
			code: 'const divisor = 0; let result = 1; result /= divisor;',
			errors,
		},
		{
			code: 'const divisor = 0; let result = 1; result %= divisor;',
			errors,
		},
		{
			code: 'const divisor = 0; const result = divisor === 0 ? 1 / divisor : 0;',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor === 0) { const result = 1 / divisor; }',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor === 0) { const result = 1 / divisor; } else { const result = 1 / 1; }',
			errors,
		},
	],
	valid: [
		'1 / 1',
		'const divisor = 1; let result = 1; result /= divisor;',
		'const divisor = 1; let result = 1; result %= divisor;',
		'const divisor = 1; const result = divisor === 0 ? 1 / divisor : 0;',
		'const divisor = 1; if (divisor === 0) { const result = 1 / divisor; }',
		'const divisor = 1; if (divisor === 0) { const result = 1 / 1; } else { const result = 1 / divisor; }',
	],
});
