import { type RuleConfig } from '../../../types';
import bestPractices from './best-practices';
import errors from './errors';
import es6 from './es6';
import _import from './import';
import style from './style';
import variables from './variables';

export const airbnbTypescriptConfig: readonly RuleConfig[] = [
	bestPractices,
	es6,
	errors,
	_import,
	style,
	variables,
];
