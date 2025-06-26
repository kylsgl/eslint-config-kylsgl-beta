import { type Linter } from 'eslint';

import { FILES_GLOB_IGNORES } from './constants';

const ignores: Linter.Config = {
	ignores: FILES_GLOB_IGNORES,
};

export default ignores;
