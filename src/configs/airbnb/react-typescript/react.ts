import { type Linter } from 'eslint';

import { FILES_GLOB_JSX } from '../../../constants';
import {
	REACT_TYPESCRIPT_LANGUAGE_OPTIONS,
	REACT_TYPESCRIPT_SETTINGS,
} from './constants';

const config: Linter.Config = {
	files: FILES_GLOB_JSX,
	languageOptions: REACT_TYPESCRIPT_LANGUAGE_OPTIONS,
	name: 'airbnb/react-typescript',
	rules: {
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
	},
	settings: REACT_TYPESCRIPT_SETTINGS,
};

export default config;
