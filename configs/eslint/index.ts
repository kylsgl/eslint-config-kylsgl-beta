import { type Linter } from 'eslint';

import { configs } from '../../src';

const config: readonly Linter.Config[] = [
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.prettier,
	{
		files: ['**/*.{js,jsx,mjs,ts,tsx,mts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaVersion: 'latest',
			},
			sourceType: 'module',
		},
	},
	{
		ignores: ['**/*.config.{js,jsx,mjs,ts,tsx,mts}', './src/generatedRules.ts'],
	},
];

export default config;
