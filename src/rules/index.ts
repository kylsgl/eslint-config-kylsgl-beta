import { type Rules } from '../types';
import baseRules from './base';
import importRules from './import';
import importTypescriptRules from './import-typescript';
import prettierRules from './prettier';
import reactRules from './react';
import reactTypescriptRules from './react-typescript';
import { typescriptRules, typescriptTypeCheckedRules } from './typescript';

export const rules: Rules = {
	base: [...baseRules, ...importRules],
	prettier: prettierRules,
	react: reactRules,
	reactTypescript: reactTypescriptRules,
	typescript: [...typescriptRules, ...importTypescriptRules],
	typescriptTypeChecked: [
		...typescriptTypeCheckedRules,
		...importTypescriptRules,
	],
};
