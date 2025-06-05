import { type Linter } from 'eslint';
import { parser } from 'typescript-eslint';

import { type Parsers } from './types';

export const parsers: Parsers = {
	typescript: parser as Linter.Parser,
};

export default parsers;
