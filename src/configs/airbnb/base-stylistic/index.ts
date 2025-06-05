import { type Linter } from 'eslint';

import bestPractices from './best-practices';
import errors from './errors';
import es6 from './es6';
import style from './style';

export const airbnbStylisticConfig: Linter.Config[] = [
	bestPractices,
	es6,
	errors,
	style,
];
