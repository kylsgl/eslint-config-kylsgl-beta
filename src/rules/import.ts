import { FilesGlob } from '../constants';
import { type RuleConfig } from '../types';

const baseConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'import/base',
	rules: {
		'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/{.storybook,__mocks__,__tests__,configs,electron,scripts,spec,test,tests}/**',
					'**/*.{config,spec,stories,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
				],
				optionalDependencies: false,
			},
		],
		'import-x/order': 'off',
	},
};

const sortConfig: RuleConfig = {
	files: FilesGlob.JS,
	name: 'import/sort',
	rules: {
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
	},
};

export default [baseConfig, sortConfig];
