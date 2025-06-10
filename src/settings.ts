import * as typescriptImportResolver from 'eslint-import-resolver-typescript';

import { FILES_GLOB_JSX, FILES_GLOB_TS } from './constants';
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
	react: [
		{
			files: FILES_GLOB_JSX,
			settings: {
				propWrapperFunctions: [
					'exact', // https://www.npmjs.com/package/prop-types-exact
					'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
					'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
				],
				react: {
					pragma: 'React',
					version: 'detect',
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
