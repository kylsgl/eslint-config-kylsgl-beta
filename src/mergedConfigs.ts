import generatedConfigs from './generatedConfigs';
import parsers from './parsers';
import { plugins } from './plugins';
import settings from './settings';
import { type Configs } from './types';

const merdgeConfigs: Configs = {
	base: [
		...plugins.base,
		...parsers.base,
		...settings.base,
		...generatedConfigs.base,
	],
	prettier: generatedConfigs.prettier,
	react: [...plugins.react, ...generatedConfigs.react],
	reactTypescript: generatedConfigs.reactTypescript,
	typescript: [
		...plugins.typescript,
		...parsers.typescript,
		...settings.typescript,
		...generatedConfigs.typescript,
	],
	typescriptTypeChecked: [
		...plugins.typescript,
		...parsers.typescript,
		...settings.typescript,
		...generatedConfigs.typescriptTypeChecked,
	],
};

export default merdgeConfigs;
