import * as typescriptImportResolver from 'eslint-import-resolver-typescript';

import { FILES_GLOB_TS } from './constants';
import { type Settings } from './types';

const settings: Settings = {
	base: [
		{
			files: FILES_GLOB_TS,
			settings: {
				'import-x/resolver': {
					node: {
						extensions: ['.json', 'js', 'jsx', 'cjs', 'mjs'],
					},
				},
			},
		},
	],
	typescript: [
		{
			files: FILES_GLOB_TS,
			settings: {
				'import-x/resolver': {
					name: 'typescriptImportResolver',
					node: {
						extensions: ['.json', 'ts', 'tsx', 'cts', 'mts'],
					},
					resolver: typescriptImportResolver,
				},
			},
		},
	],
};

export default settings;
