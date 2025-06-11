import eslintConfigPrettier from 'eslint-config-prettier';

import { FILES_GLOB_JS_TS } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'prettier/base',
	rules: {
		...eslintConfigPrettier.rules,
		'@stylistic/quotes': undefined,
		curly: undefined,
	},
};

export default [baseConfig];
