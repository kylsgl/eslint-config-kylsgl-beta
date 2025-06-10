import { type Linter } from 'eslint';

import { configs, parsers, plugins, settings } from '../../src';
import ignoresConfig from './ignores';

const config: ReadonlyArray<Readonly<Linter.Config>> = [
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
	...plugins.base,
	...plugins.typescript,
	...parsers.base,
	...parsers.typescript,
	...settings.base,
	...settings.typescript,
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.prettier,
	...ignoresConfig,
];

export default config;
