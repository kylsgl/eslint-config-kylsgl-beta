import { type Linter } from 'eslint';

import { FILES_GLOB_JS_TS } from '../constants';

const baseConfig: Readonly<Linter.Config> = {
	name: 'import/base',
	rules: {
		'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
	},
};

const preferDefaultExportExclusionConfig: Readonly<Linter.Config> = {
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

const sortConfig: Readonly<Linter.Config> = {
	files: FILES_GLOB_JS_TS,
	name: 'import/sort',
	rules: {
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
	},
};

export default [baseConfig, preferDefaultExportExclusionConfig, sortConfig];
