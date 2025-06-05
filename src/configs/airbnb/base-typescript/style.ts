import { type Linter } from 'eslint';

import { FILES_GLOB_TS } from '../../../constants';
import baseStyleConfig from '../base/style';

const config: Linter.Config = {
	files: FILES_GLOB_TS,

	name: 'airbnb/typescript/style',
	rules: {
		'@typescript-eslint/naming-convention': [
			'error',
			{
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				selector: 'variable',
			},
			{
				format: ['camelCase', 'PascalCase'],
				selector: 'function',
			},
			{
				format: ['PascalCase'],
				selector: 'typeLike',
			},
		],

		'@typescript-eslint/no-array-constructor':
			baseStyleConfig.rules?.['no-array-constructor'],
		camelcase: 'off',
		'no-array-constructor': 'off',
	},
};
export default config;
