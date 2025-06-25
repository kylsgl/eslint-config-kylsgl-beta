import { FILES_GLOB_JS_TS } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'import/base',
	rules: {
		'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/{.storybook,__mocks__,__tests__,configs,spec,test,tests}/**',
					'**/*.{config,spec,stories,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
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

export default [baseConfig, sortConfig];
