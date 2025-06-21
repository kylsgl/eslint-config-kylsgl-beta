import { FILES_GLOB_TS } from '../constants';
import { type RuleConfig } from '../types';

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

const noExtraneousDependenciesExclusionConfig: RuleConfig = {
	files: FILES_GLOB_TS,
	name: 'import/prefer-default-export-exclusion',
	rules: {
		'import-x/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/{__mocks__,__tests__,configs,spec,test,tests}/**',
					'**/vue.config.{ts,cts,mts}', // vue-cli config
					'**/rollup.config{,.!*}.{ts,cts,mts}', // rollup config
					'**/eslint.config.{ts,cts,mts}', // eslint config
					'**/vitest.config.{ts,cts,mts}', // vitest config
				],
				optionalDependencies: false,
			},
		],
	},
};

export default [
	noExtraneousDependenciesExclusionConfig,
	preferDefaultExportExclusionConfig,
];
