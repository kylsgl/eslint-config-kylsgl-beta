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
			code: '1 / (1 * 0)',
			errors,
		},
		{
			code: 'const divisor = 0; let result = 1; result /= divisor',
			errors,
		},
		{
			code: 'const divisor = 0; let result = 1; result %= divisor',
			errors,
		},
		{
			code: 'const divisor = 0; const result = divisor === 0 ? 1 / divisor : 0',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor === 0) { const result = 1 / divisor; }',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor !== 0) { throw new Error() } const result = 1 / divisor',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor === 0) { const result = 1 / divisor; } else { const result = 1 / 1; }',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor != null) { if (divisor === 0) { const result = 1 / divisor; } }',
			errors,
		},
		{
			code: 'const divisor = 0; if (divisor === 0 || (divisor >= 0 && divisor <= 0)) { const result = 5 / divisor; }',
			errors,
		},
		{
			code: 'const divisors = { zero: 0, }; if (divisors.zero === 0) { const result = 1 / divisors.zero; }',
			errors,
		},
	],
	valid: [
		'1 / 1',
		'1 / (1 * 1)',
		'const divisor = 1; let result = 1; result /= divisor',
		'const divisor = 1; let result = 1; result %= divisor',
		'const divisor = 1; const result = divisor === 0 ? 1 / divisor : 0',
		'const divisor = 1; if (divisor === 0) { const result = 1 / divisor; }',
		'const divisor = 1; if (divisor === 0) { throw new Error() } const result = 1 / divisor',
		'const divisor = 1; if (divisor === 0) { const result = 1 / 1; } else { const result = 1 / divisor; }',
		'const divisor = 1; if (divisor !== 0 || (divisor > 0 && divisor < 0)) { const result = 5 / divisor; }',
		'const divisors = { zero: 1, }; if (divisors.zero !== 0) { const result = 1 / divisors.zero; }',
		'function test() { const divisor = 1; if (divisor === 0) { return; } const result = 1 / divisor; }',
		'function test() { const divisor = 1; if (divisor === 0) { throw new Error(); } const result = 1 / divisor; }',
		{
			code: 'const DivisorObj = { zero: 0, }; const result = 1 / DivisorObj.zero',
			options: [{ ignorePascalCase: true }],
		},
		{
			code: 'const DIVISOR_OBJ = { zero: 0, }; const result = 1 / DIVISOR_OBJ.zero',
			options: [{ ignoreScreamingSnakeCase: true }],
		},
		{
			code: 'const DivisorOne = 0; const result = 1 / DivisorOne',
			options: [{ ignorePascalCase: true }],
		},
		{
			code: 'const DIVISOR_ONE = 0; const result = 1 / DIVISOR_ONE',
			options: [{ ignoreScreamingSnakeCase: true }],
		},
	],
});
