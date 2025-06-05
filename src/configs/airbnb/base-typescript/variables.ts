import { type Linter } from 'eslint';

import { FILES_GLOB_TS } from '../../../constants';
import baseVariablesConfig from '../base/variables';

const config: Linter.Config = {
	files: FILES_GLOB_TS,

	name: 'airbnb/typescript/variables',
	rules: {
		'@typescript-eslint/no-shadow': baseVariablesConfig.rules?.['no-shadow'],
		'@typescript-eslint/no-unused-vars':
			baseVariablesConfig.rules?.['no-unused-vars'],
		'@typescript-eslint/no-use-before-define':
			baseVariablesConfig.rules?.['no-use-before-define'],
		'no-shadow': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
	},
};

export default config;
