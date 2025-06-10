import generatedRules from './generatedRules';
import parsers from './parsers';
import { plugins } from './plugins';
import settings from './settings';
import { type Configs } from './types';

const configs: Configs = {
	base: [
		...plugins.base,
		...parsers.base,
		...settings.base,
		...generatedRules.base,
	],
	prettier: generatedRules.prettier,
	react: [
		...plugins.react,
		...parsers.react,
		...settings.react,
		...generatedRules.react,
	],
	reactTypescript: generatedRules.reactTypescript,
	typescript: [
		...plugins.typescript,
		...parsers.typescript,
		...settings.typescript,
		...generatedRules.typescript,
	],
	typescriptTypeChecked: [
		...plugins.typescript,
		...parsers.typescript,
		...settings.typescript,
		...generatedRules.typescriptTypeChecked,
	],
};

export default configs;
