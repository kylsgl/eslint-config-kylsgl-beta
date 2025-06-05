import { type Linter } from 'eslint';

import { FILES_GLOB_JS_TS } from '../../../constants';

const config: Linter.Config = {
	files: FILES_GLOB_JS_TS,

	name: 'airbnb/strict',
	rules: {
		// babel inserts `'use strict';` for us
		strict: ['error', 'never'],
	},
};

export default config;
