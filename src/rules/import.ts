import { FILES_GLOB_JS_TS } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'import/base',
	rules: {
		'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
	},
};

const preferDefaultExportExclusionConfig: RuleConfig = {
	files: [
		'**/constants.ts',
		'**/enums.ts',
		'**/index.{d.ts,ts}',
		'**/schemas.ts',
		'**/utils.ts',
	],
	name: 'import/prefer-default-export-exclusion',
	rules: {
		'import-x/prefer-default-export': 'off',
	},
};

const sortConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'import/sort',
	rules: {
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
	},
};

export default [baseConfig, preferDefaultExportExclusionConfig, sortConfig];
