import { type Linter } from 'eslint';
import testingLibrary from 'eslint-plugin-testing-library';

import { FILES_GLOB_JSX } from '../constants';
import { airbnbReactConfig } from './airbnb';

const baseConfig: Readonly<Linter.Config> = {
	files: FILES_GLOB_JSX,
	name: 'react/base',
	rules: {
		'react-hooks/react-compiler': 'error',
		'react/checked-requires-onchange-or-readonly': 'error',
		// 'react/jsx-props-no-spreading': [
		// 	'error',
		// 	{
		// 		custom: 'enforce',
		// 		exceptions: [],
		// 		explicitSpread: 'enforce',
		// 		html: 'ignore',
		// 	},
		// ],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['function-declaration'],
				unnamedComponents: [],
			},
		],
		'react/jsx-key': 'error',
		'react/jsx-max-depth': ['error', { max: 5 }],
		'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
		'react/jsx-no-literals': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/prefer-read-only-props': 'error',
		'react/react-in-jsx-scope': 'off',
	},
};

const reactRefreshConfig: Readonly<Linter.Config> = {
	files: FILES_GLOB_JSX,
	name: 'react/refresh',
	rules: {
		'react-refresh/only-export-components': [
			'error',
			{ allowConstantExport: true },
		],
	},
};

const reactTestsConfig: Readonly<Linter.Config> = {
	files: ['**/{__tests__,tests}/**/*.test.{jsx,tsx}'],
	name: 'react/tests',
	rules: {
		...testingLibrary.configs['flat/react'].rules,
		'jsx-a11y/control-has-associated-label': 'off',
	},
};

export default [
	...airbnbReactConfig,
	baseConfig,
	reactRefreshConfig,
	reactTestsConfig,
];
