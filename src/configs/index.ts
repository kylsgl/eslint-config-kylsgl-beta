import { type Configs } from '../types';
import baseConfig from './base';
import importConfig from './import';
import prettierConfig from './prettier';
import reactConfig from './react';
import reactTypescriptConfig from './react-typescript';
import { typescriptConfig, typescriptTypeCheckedConfig } from './typescript';

export const configs: Configs = {
	base: [...baseConfig, ...importConfig],
	prettier: prettierConfig,
	react: reactConfig,
	reactTypescript: reactTypescriptConfig,
	typescript: typescriptConfig,
	typescriptTypeChecked: typescriptTypeCheckedConfig,
};
