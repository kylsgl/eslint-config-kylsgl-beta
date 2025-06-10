import vitest from '@vitest/eslint-plugin';
import { type Linter } from 'eslint';
import packageJSON from 'eslint-plugin-package-json';
import perfectionist from 'eslint-plugin-perfectionist';
// @ts-expect-error - no types
import promise from 'eslint-plugin-promise';
import * as regexp from 'eslint-plugin-regexp';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';

import {
	FILES_GLOB_JS_TS,
	FILES_GLOB_JS_TS_TEST,
	FILES_GLOB_PACKAGE_JSON,
} from '../constants';
import { type RuleConfig } from '../types';
import { airbnbConfig, airbnbStylisticConfig } from './airbnb';

const baseConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'base',
	rules: {
		curly: ['error', 'all'],
		'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
		'no-empty-function': 'error',
		'no-restricted-syntax': [
			'error',
			{
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				selector: 'ForInStatement',
			},
			{
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				selector: 'WithStatement',
			},
		],
		'no-unused-expressions': 'error',
		'prefer-template': 'off',
		'require-await': 'error',
	},
};

const kylsglConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'kylsgl/base',
	rules: {
		'kylsgl/no-toplevel-function-expression': 'error',
	},
};

const packageJSONConfig: RuleConfig = {
	files: FILES_GLOB_PACKAGE_JSON,
	name: 'packageJSON/base',
	rules: {
		...packageJSON.configs.recommended.rules,
		'package-json/no-redundant-files': 'error',
		'package-json/require-author': 'error',
	},
};

const perfectionistConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'perfectionist/base',
	rules: {
		...perfectionist.configs['recommended-natural'].rules,
		'perfectionist/sort-classes': 'off',
		'perfectionist/sort-exports': 'off',
		'perfectionist/sort-imports': 'off',
		'perfectionist/sort-modules': 'off',
		'perfectionist/sort-named-exports': 'off',
		'perfectionist/sort-named-imports': 'off',
		'perfectionist/sort-union-types': [
			'error',
			{
				groups: [
					'conditional',
					'function',
					'import',
					'intersection',
					'keyword',
					'literal',
					'named',
					'object',
					'operator',
					'tuple',
					'union',
					'nullish',
				],
				order: 'asc',
				type: 'natural',
			},
		],
		// 'perfectionist/sort-variable-declarations': 'off',
	},
};

const promiseConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'promise/base',
	rules: {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		...(promise.configs['flat/recommended']
			.rules as Partial<Linter.RulesRecord>),
		'promise/always-return': ['error', { ignoreLastCallback: true }],
		'promise/catch-or-return': ['error', { allowFinally: true }],
	},
};

const regexpConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'regexp/base',
	rules: {
		...regexp.configs['flat/recommended'].rules,
	},
};

const sonarJsConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'sonarjs/base',
	rules: {
		...sonarjs.configs.recommended.rules,
		// Rules that are already covered or causes conflitcs in the airbnb config
		'sonarjs/array-callback-without-return': 'off',
		'sonarjs/block-scoped-var': 'off',
		'sonarjs/call-argument-line': 'off',
		'sonarjs/code-eval': 'off',
		'sonarjs/constructor-for-side-effects': 'off',
		'sonarjs/different-types-comparison': 'off',
		'sonarjs/for-loop-increment-sign': 'off',
		'sonarjs/function-return-type': 'off',
		'sonarjs/jsx-no-leaked-render': 'off',
		'sonarjs/label-position': 'off',
		'sonarjs/mouse-events-a11y': 'off',
		'sonarjs/new-cap': 'off',
		'sonarjs/no-array-index-key': 'off',
		'sonarjs/no-case-label-in-switch': 'off',
		'sonarjs/no-commented-code': 'off',
		'sonarjs/no-delete-var': 'off',
		'sonarjs/no-empty-test-file': 'off',
		'sonarjs/no-globals-shadowing': 'off',
		'sonarjs/no-hook-setter-in-body': 'off',
		'sonarjs/no-identical-conditions': 'off',
		'sonarjs/no-labels': 'off',
		'sonarjs/no-nested-assignment': 'off',
		'sonarjs/no-nested-functions': 'off',
		'sonarjs/no-one-iteration-loop': 'off',
		'sonarjs/no-parameter-reassignment': 'off',
		'sonarjs/no-primitive-wrappers': 'off',
		'sonarjs/no-same-line-conditional': 'off',
		'sonarjs/no-try-promise': 'off',
		'sonarjs/no-undefined-argument': 'off',
		'sonarjs/no-unenclosed-multiline-block': 'off',
		'sonarjs/no-unthrown-error': 'off',
		'sonarjs/no-useless-catch': 'off',
		'sonarjs/no-useless-increment': 'off',
		'sonarjs/non-existent-operator': 'off',
		'sonarjs/prefer-default-last': 'off',
		'sonarjs/prefer-immediate-return': 'error',
		'sonarjs/prefer-read-only-props': 'off',
		'sonarjs/pseudo-random': 'off',
		'sonarjs/todo-tag': 'off',
		'sonarjs/void-use': 'off',
	},
};

const testsConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS_TEST,
	name: 'tests/base',
	rules: {
		...vitest.configs.recommended.rules,
		'class-methods-use-this': 'off',
	},
};

const unicornConfig: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'unicorn/base',
	rules: {
		...unicorn.configs.recommended.rules,
		'unicorn/filename-case': 'off',
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-reduce': 'off',
		'unicorn/no-for-loop': 'off',
		'unicorn/no-null': 'off',
		'unicorn/numeric-separators-style': [
			'error',
			{ number: { groupLength: 3, minimumDigits: 0 } },
		],
		'unicorn/prefer-dom-node-text-content': 'off',
		'unicorn/prefer-query-selector': 'off',
		'unicorn/prevent-abbreviations': [
			'off',
			{
				checkFilenames: false,
			},
		],
	},
};

export default [
	...airbnbConfig,
	...airbnbStylisticConfig,
	baseConfig,
	kylsglConfig,
	packageJSONConfig,
	perfectionistConfig,
	promiseConfig,
	regexpConfig,
	sonarJsConfig,
	testsConfig,
	unicornConfig,
];
