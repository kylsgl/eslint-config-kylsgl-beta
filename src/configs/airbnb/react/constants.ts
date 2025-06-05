import { type Linter } from 'eslint';

export const REACT_LANGUAGE_OPTIONS: Linter.Config['languageOptions'] = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};

export const REACT_SETTINGS: Linter.Config['settings'] = {
	propWrapperFunctions: [
		'exact', // https://www.npmjs.com/package/prop-types-exact
		'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
		'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
	],
	react: {
		pragma: 'React',
		version: 'detect',
	},
};
