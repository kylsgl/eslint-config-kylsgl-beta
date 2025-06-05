import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import { type ESLint } from 'eslint';
import { importX } from 'eslint-plugin-import-x';
// @ts-expect-error - no types
import jsxA11y from 'eslint-plugin-jsx-a11y';
import n from 'eslint-plugin-n';
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

import { type Plugins } from '../types';
import kylsgl from './kylsgl';

export const plugins: Plugins = {
	base: {
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
		vitest,
	},
	react: {
		'jsx-a11y': jsxA11y as ESLint.Plugin,
		react,
		'react-hooks': reactHooks,
		'react-refresh': reactRefresh,
		'testing-library': testingLibrary,
	},
	typescript: {
		'@typescript-eslint': tsEslint.plugin as ESLint.Plugin,
		tsdoc,
	},
};
