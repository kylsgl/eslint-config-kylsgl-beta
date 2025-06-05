import * as typescriptImportResolver from 'eslint-import-resolver-typescript';

import { type Settings } from './types';

const settings: Settings = {
	base: {
		'import-x/resolver': {
			node: {
				extensions: ['.json', 'js', 'jsx', 'cjs', 'mjs'],
			},
		},
	},
	typescript: {
		'import-x/resolver': {
			name: 'typescriptImportResolver',
			node: {
				extensions: ['.json', 'ts', 'tsx', 'cts', 'mts'],
			},
			resolver: typescriptImportResolver,
		},
	},
};

export default settings;
