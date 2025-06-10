import { type Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

import { FILES_GLOB_JS_TS } from '../constants';

const baseConfig: Linter.Config = {
	files: FILES_GLOB_JS_TS,
	name: 'prettier/base',
	rules: {
		...eslintConfigPrettier.rules,
		'@stylistic/quotes': undefined,
		curly: undefined,
	},
};

export default [baseConfig];
