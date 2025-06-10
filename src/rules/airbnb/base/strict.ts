import { FILES_GLOB_JS_TS } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FILES_GLOB_JS_TS,
	name: 'airbnb/strict',
	rules: {
		// babel inserts `'use strict';` for us
		strict: ['error', 'never'],
	},
};

export default rules;
