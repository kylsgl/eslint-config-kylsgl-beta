import { FILES_GLOB_JS_TS } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'import/base',
	rules: {
		'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
	},
};

const noExtraneousDependenciesExclusionConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'import/prefer-default-export-exclusion',
	rules: {
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/{__mocks__,__tests__,configs,spec,test,tests}/**',
					'**/vue.config.{js,cjs,mjs}', // vue-cli config
					'**/rollup.config{,.!*}.{js,cjs,mjs}', // rollup config
					'**/eslint.config.{js,cjs,mjs}', // eslint config
					'**/vitest.config.{js,cjs,mjs}', // vitest config
				],
				optionalDependencies: false,
			},
		],
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

export default [
	baseConfig,
	noExtraneousDependenciesExclusionConfig,
	sortConfig,
];
