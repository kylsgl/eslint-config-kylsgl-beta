import { FILES_GLOB_JSX } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FILES_GLOB_JSX,
	name: 'airbnb/react-typescript',
	rules: {
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
	},
};

export default rules;
