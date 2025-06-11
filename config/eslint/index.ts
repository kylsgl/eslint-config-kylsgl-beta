import { type Linter } from 'eslint';

import { configs } from '../../src';
import ignoresConfig from './ignores';

const config: readonly Linter.Config[] = [
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.prettier,
	...ignoresConfig,
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
];

export default config;
