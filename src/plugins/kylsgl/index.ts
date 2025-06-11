import { type ESLint } from 'eslint';

import { noTopLevelFunctionExpression } from './rules';
import noDefaultParams from './rules/no-default-params';

const kylsgl: ESLint.Plugin = {
	rules: {
		'no-default-params': noDefaultParams,
		'no-toplevel-function-expression': noTopLevelFunctionExpression,
	},
};

export default kylsgl;
