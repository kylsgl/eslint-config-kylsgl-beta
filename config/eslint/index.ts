import { type Linter } from 'eslint';

import { configs, parsers, plugins, settings } from '../../src';
import ignoresConfig from './ignores';

const config: ReadonlyArray<Readonly<Linter.Config>> = [
	{
		languageOptions: {
			ecmaVersion: 'latest',
			parser: parsers.typescript,
			parserOptions: {
				ecmaVersion: 'latest',
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
			sourceType: 'module',
		},
		plugins: {
			...plugins.base,
			...plugins.typescript,
		},
		settings: {
			...settings.base,
			...settings.typescript,
		},
	},
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.prettier,
	...ignoresConfig,
];

export default config;
