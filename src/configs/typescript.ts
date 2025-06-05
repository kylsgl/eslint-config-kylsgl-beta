import { type Linter } from 'eslint';
import tsEslint from 'typescript-eslint';

import { FILES_GLOB_TS } from '../constants';
import { extractConfigRules } from '../utils';
import { airbnbTypescriptConfig } from './airbnb';

const typescriptRules: NonNullable<Readonly<Linter.Config>['rules']> = {
	'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{
			disallowTypeAnnotations: true,
			fixStyle: 'inline-type-imports',
			prefer: 'type-imports',
		},
	],
	'@typescript-eslint/explicit-function-return-type': 'error',
	'@typescript-eslint/explicit-member-accessibility': 'error',
	'@typescript-eslint/explicit-module-boundary-types': 'error',
	'@typescript-eslint/member-ordering': 'error',
	'@typescript-eslint/method-signature-style': 'error',
	'@typescript-eslint/no-empty-object-type': [
		'error',
		{ allowInterfaces: 'with-single-extends' },
	],
	'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			ignoreRestSiblings: true,
		},
	],
	'@typescript-eslint/no-use-before-define': [
		'error',
		{
			allowNamedExports: false,
			classes: true,
			enums: true,
			functions: false,
			ignoreTypeReferences: true,
			typedefs: false,
			variables: true,
		},
	],
	'@typescript-eslint/no-useless-empty-export': 'error',
	'@typescript-eslint/prefer-enum-initializers': 'error',
	'@typescript-eslint/prefer-for-of': 'off',
};

const typescriptTypeCheckedRules: NonNullable<
	Readonly<Linter.Config>['rules']
> = {
	'@typescript-eslint/consistent-type-exports': [
		'error',
		{
			fixMixedExportsWithInlineTypeSpecifier: true,
		},
	],
	'@typescript-eslint/no-unnecessary-qualifier': 'error',
	'@typescript-eslint/no-unnecessary-type-conversion': 'error',
	// TODO: RE-CHECK
	'@typescript-eslint/no-unnecessary-type-parameters': 'off',
	'@typescript-eslint/prefer-nullish-coalescing': [
		'error',
		{
			ignoreConditionalTests: false,
			ignoreMixedLogicalExpressions: false,
		},
	],
	'@typescript-eslint/prefer-readonly': 'error',
	// TODO: RE-CHECK
	// '@typescript-eslint/prefer-readonly-parameter-types': 'error',
	'@typescript-eslint/promise-function-async': 'error',
	'@typescript-eslint/restrict-template-expressions': [
		'error',
		{
			allowAny: false,
			allowNever: false,
			allowNullish: false,
			allowNumber: true,
			allowRegExp: false,
		},
	],
	'@typescript-eslint/strict-boolean-expressions': [
		'error',
		{
			allowAny: false,
			allowNullableBoolean: false,
			allowNullableNumber: false,
			allowNullableObject: false,
			allowNullableString: false,
			allowNumber: false,
			allowString: false,
		},
	],
};

const baseConfig: Readonly<Linter.Config> = {
	files: FILES_GLOB_TS,
	name: 'typescript/base',
	rules: {
		...extractConfigRules(tsEslint.configs.recommended as Linter.Config[]),
		...extractConfigRules(tsEslint.configs.strict as Linter.Config[]),
		...extractConfigRules(tsEslint.configs.stylistic as Linter.Config[]),
		...typescriptRules,
	},
};

const baseTypeCheckedConfig: Readonly<Linter.Config> = {
	files: FILES_GLOB_TS,
	name: 'typescript/base-type-checked',
	rules: {
		...extractConfigRules(
			tsEslint.configs.recommendedTypeChecked as Linter.Config[],
		),
		...extractConfigRules(
			tsEslint.configs.strictTypeChecked as Linter.Config[],
		),
		...extractConfigRules(
			tsEslint.configs.stylisticTypeChecked as Linter.Config[],
		),
		...typescriptRules,
		...typescriptTypeCheckedRules,
	},
};

const declarationConfig: Readonly<Linter.Config> = {
	files: ['**/*.d.ts'],
	name: 'typescript/declaration',
	rules: {
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'no-template-curly-in-string': 'off',
		'no-underscore-dangle': 'off',
		'no-var': 'off',
		'vars-on-top': 'off',
	},
};

const sonarJsConfig: Readonly<Linter.Config> = {
	files: FILES_GLOB_TS,
	name: 'sonarjs/typescript',
	rules: {
		// Rules that are already covered or causes conflitcs in the typescript config
		'sonarjs/argument-type': 'off',
		'sonarjs/bitwise-operators': 'off',
		'sonarjs/class-name': 'off',
		'sonarjs/deprecation': 'off',
		'sonarjs/future-reserved-words': 'off',
		'sonarjs/in-operator-type-error': 'off',
		'sonarjs/inconsistent-function-call': 'off',
		'sonarjs/new-operator-misuse': 'off',
		'sonarjs/no-array-delete': 'off',
		'sonarjs/no-associative-arrays': 'off',
		'sonarjs/no-duplicate-in-composite': 'off',
		'sonarjs/no-extra-arguments': 'off',
		'sonarjs/no-fallthrough': 'off',
		'sonarjs/no-global-this': 'off',
		'sonarjs/no-gratuitous-expressions': 'off',
		'sonarjs/no-implicit-global': 'off',
		'sonarjs/no-invalid-await': 'off',
		'sonarjs/no-literal-call': 'off',
		'sonarjs/no-redundant-boolean': 'off',
		'sonarjs/no-unused-vars': 'off',
		'sonarjs/no-use-of-empty-return-value': 'off',
		'sonarjs/null-dereference': 'off',
		'sonarjs/unused-import': 'off',
		'sonarjs/updated-const-var': 'off',
	},
};

const tsdocConfig: Readonly<Linter.Config> = {
	files: FILES_GLOB_TS,
	name: 'tsdoc/base',
	rules: {
		'tsdoc/syntax': 'warn',
	},
};

export const typescriptConfig = [
	...airbnbTypescriptConfig,
	baseConfig,
	declarationConfig,
	sonarJsConfig,
	tsdocConfig,
];

export const typescriptTypeCheckedConfig = [
	...airbnbTypescriptConfig,
	baseTypeCheckedConfig,
	declarationConfig,
	sonarJsConfig,
	tsdocConfig,
];
