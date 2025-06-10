import { type Linter } from 'eslint';
import packageJSON from 'eslint-plugin-package-json';
import { parser } from 'typescript-eslint';

import {
	FILES_GLOB_JSX,
	FILES_GLOB_PACKAGE_JSON,
	FILES_GLOB_TS,
} from './constants';
import { type Parsers } from './types';

const parsers: Parsers = {
	base: [
		{
			files: FILES_GLOB_PACKAGE_JSON,
			languageOptions: {
				parser: packageJSON.configs.recommended.languageOptions.parser,
			},
		},
	],
	react: [
		{
			files: FILES_GLOB_JSX,
			languageOptions: {
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
			},
		},
	],
	typescript: [
		{
			files: FILES_GLOB_TS,
			languageOptions: {
				parser: parser as Linter.Parser,
				parserOptions: {
					projectService: true,
					tsconfigRootDir: import.meta.dirname,
				},
				sourceType: 'module',
			},
		},
	],
};

export default parsers;
