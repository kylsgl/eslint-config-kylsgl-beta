import { type RuleConfig } from '../../../types';
import bestPractices from './best-practices';
import errors from './errors';
import es6 from './es6';
import _import from './import';
import node from './node';
import strict from './strict';
import style from './style';
import variables from './variables';

export const airbnbConfig: readonly RuleConfig[] = [
	bestPractices,
	es6,
	errors,
	_import,
	node,
	strict,
	style,
	variables,
];
