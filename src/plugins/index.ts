import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import { type ESLint } from 'eslint';
import { importX } from 'eslint-plugin-import-x';
// @ts-expect-error - no types
import jsxA11y from 'eslint-plugin-jsx-a11y';
import n from 'eslint-plugin-n';
import packageJSON from 'eslint-plugin-package-json';
import perfectionist from 'eslint-plugin-perfectionist';
// @ts-expect-error - no types
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import * as regexp from 'eslint-plugin-regexp';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import testingLibrary from 'eslint-plugin-testing-library';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import tsEslint from 'typescript-eslint';

import {
	FILES_GLOB_JS_TS,
	FILES_GLOB_JS_TS_TEST,
	FILES_GLOB_JSX,
	FILES_GLOB_JSX_TEST,
	FILES_GLOB_PACKAGE_JSON,
	FILES_GLOB_TS,
} from '../constants';
import { type Plugins } from '../types';
import kylsgl from './kylsgl';

export const plugins: Plugins = {
	base: [
		{
			files: FILES_GLOB_JS_TS,
			plugins: {
				'@stylistic': stylistic,
				'import-x': importX as unknown as ESLint.Plugin,
				kylsgl,
				n,
				perfectionist,
				promise: promise as ESLint.Plugin,
				regexp,
				'simple-import-sort': simpleImportSort,
				sonarjs,
				unicorn,
			},
		},
		{
			files: FILES_GLOB_PACKAGE_JSON,
			plugins: {
				'package-json': packageJSON as ESLint.Plugin,
			},
		},
		{
			files: FILES_GLOB_JS_TS_TEST,
			plugins: {
				vitest: vitest as unknown as ESLint.Plugin,
			},
		},
	],
	react: [
		{
			files: FILES_GLOB_JSX,
			plugins: {
				'jsx-a11y': jsxA11y as ESLint.Plugin,
				react,
				'react-hooks': reactHooks,
				'react-refresh': reactRefresh,
			},
		},
		{
			files: FILES_GLOB_JSX_TEST,
			plugins: {
				'testing-library': testingLibrary,
			},
		},
	],
	typescript: [
		{
			files: FILES_GLOB_TS,
			plugins: {
				'@typescript-eslint': tsEslint.plugin as ESLint.Plugin,
				tsdoc,
			},
		},
	],
};
