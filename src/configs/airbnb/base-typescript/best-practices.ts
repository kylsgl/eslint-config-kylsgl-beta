import { type Linter } from 'eslint';

import { FILES_GLOB_TS } from '../../../constants';
import baseBestPracticesConfig from '../base/best-practices';

const config: Linter.Config = {
	files: FILES_GLOB_TS,

	name: 'airbnb/typescript/best-practices',
	rules: {
		// Prefer typescript's noImplicitReturns
		'@typescript-eslint/consistent-return': 'off',
		'@typescript-eslint/default-param-last':
			baseBestPracticesConfig.rules?.['default-param-last'],
		'@typescript-eslint/dot-notation':
			baseBestPracticesConfig.rules?.['dot-notation'],
		'@typescript-eslint/no-empty-function':
			baseBestPracticesConfig.rules?.['no-empty-function'],
		'@typescript-eslint/no-implied-eval':
			baseBestPracticesConfig.rules?.['no-implied-eval'],
		'@typescript-eslint/no-loop-func':
			baseBestPracticesConfig.rules?.['no-loop-func'],
		'@typescript-eslint/no-magic-numbers':
			baseBestPracticesConfig.rules?.['no-magic-numbers'],
		'@typescript-eslint/no-unused-expressions':
			baseBestPracticesConfig.rules?.['no-unused-expressions'],
		'@typescript-eslint/only-throw-error':
			baseBestPracticesConfig.rules?.['no-throw-literal'],
		'@typescript-eslint/require-await':
			baseBestPracticesConfig.rules?.['require-await'],
		'consistent-return': 'off',
		'default-param-last': 'off',
		'dot-notation': 'off',
		'no-empty-function': 'off',
		'no-fallthrough': 'off',
		'no-implied-eval': 'off',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-redeclare': 'off',
		'no-throw-literal': 'off',
		'no-unused-expressions': 'off',
		'require-await': 'off',
	},
};

export default config;
