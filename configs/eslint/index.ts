import { type Linter } from 'eslint';

import { configs } from '../../src';

const config: readonly Linter.Config[] = [
	...configs.base,
	...configs.typeScriptTypeChecked,
	...configs.prettier,
	{
		ignores: ['./eslint.config.mjs', './src/generatedRules.ts'],
	},
];

export default config;
