import { type ESLint } from 'eslint';

import { noTopLevelFunctionExpression } from './rules';

const kylsgl: ESLint.Plugin = {
	rules: {
		'no-toplevel-function-expression': noTopLevelFunctionExpression,
	},
};

export default kylsgl;
