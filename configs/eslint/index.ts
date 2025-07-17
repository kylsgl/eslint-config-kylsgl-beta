import { type Linter } from 'eslint';

import { configs } from '../../src';

const config: readonly Linter.Config[] = [
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.prettier,
	{
		ignores: ['./eslint.config.mjs', './src/generatedRules.ts'],
	},
];

export default config;
