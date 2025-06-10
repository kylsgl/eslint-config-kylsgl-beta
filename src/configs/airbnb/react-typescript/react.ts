import { type Linter } from 'eslint';

import { FILES_GLOB_JSX } from '../../../constants';

const config: Linter.Config = {
	files: FILES_GLOB_JSX,
	name: 'airbnb/react-typescript',
	rules: {
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
	},
};

export default config;
