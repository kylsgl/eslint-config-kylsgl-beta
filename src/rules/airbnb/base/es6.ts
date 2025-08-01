import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JS,
	name: 'airbnb/es6',
	rules: {
		// enforces no braces where they can be omitted
		// https://eslint.org/docs/rules/arrow-body-style
		// TODO: enable requireReturnForObjectLiteral?
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: false,
			},
		],

		// verify super() callings in constructors
		'constructor-super': 'error',

		// disallow modifying variables of class declarations
		// https://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// disallow symbol constructor
		// https://eslint.org/docs/rules/no-new-symbol
		// Replaced by no-new-native-nonconstructor
		// 'no-new-symbol': 'error',

		// disallow modifying variables that are declared using const
		'no-const-assign': 'error',

		// disallow duplicate class members
		// https://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// disallow importing from the same path more than once
		// https://eslint.org/docs/rules/no-duplicate-imports
		// replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'no-duplicate-imports': 'off',

		// Disallow specified names in exports
		// https://eslint.org/docs/rules/no-restricted-exports
		'no-restricted-exports': [
			'error',
			{
				restrictedNamedExports: [
					'default', // use `export default` to provide a default export
					'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
				],
			},
		],

		// disallow specific imports
		// https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': [
			'off',
			{
				paths: [],
				patterns: [],
			},
		],

		// disallow to use this/super before super() calling in constructors.
		// https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// disallow useless computed property keys
		// https://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 'error',

		// disallow unnecessary constructor
		// https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'error',

		// disallow renaming import, export, and destructured assignments to the same name
		// https://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': [
			'error',
			{
				ignoreDestructuring: false,
				ignoreExport: false,
				ignoreImport: false,
			},
		],

		// require let or const instead of var
		'no-var': 'error',

		// require method and property shorthand syntax for object literals
		// https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true,
				ignoreConstructors: false,
			},
		],

		// suggest using arrow functions as callbacks
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],

		// suggest using Reflect methods where applicable
		// https://eslint.org/docs/rules/prefer-reflect
		// This rule was deprecated without a replacement rule
		// 'prefer-reflect': 'off',

		// suggest using of const declaration for variables that are never modified after declared
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],

		// Prefer destructuring from arrays and objects
		// https://eslint.org/docs/rules/prefer-destructuring
		'prefer-destructuring': [
			'error',
			{
				AssignmentExpression: {
					array: true,
					object: false,
				},
				VariableDeclarator: {
					array: false,
					object: true,
				},
			},
			{
				enforceForRenamedProperties: false,
			},
		],

		// disallow parseInt() in favor of binary, octal, and hexadecimal literals
		// https://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'error',

		// use rest parameters instead of arguments
		// https://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'error',

		// suggest using the spread syntax instead of .apply()
		// https://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'error',

		// suggest using template literals instead of string concatenation
		// https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'error',

		// disallow generator functions that do not have yield
		// https://eslint.org/docs/rules/require-yield
		'require-yield': 'error',

		// import sorting
		// https://eslint.org/docs/rules/sort-imports
		'sort-imports': [
			'off',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],

		// require a Symbol description
		// https://eslint.org/docs/rules/symbol-description
		'symbol-description': 'error',
	},
};

export default rules;
