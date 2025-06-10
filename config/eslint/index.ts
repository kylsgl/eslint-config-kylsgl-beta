import { type Linter } from 'eslint';

import { configs } from '../../src';
import ignoresConfig from './ignores';

const config: readonly Linter.Config[] = [
	{
		files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaVersion: 'latest',
			},
			sourceType: 'module',
		},
	},
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.prettier,
	...ignoresConfig,
];

export default config;
