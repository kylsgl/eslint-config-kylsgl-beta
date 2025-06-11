import rules from './generatedRules';
import parsers from './parsers';
import { plugins } from './plugins';
import settings from './settings';
import { type Configs } from './types';

const configs: Configs = {
	base: [...plugins.base, ...parsers.base, ...settings.base, ...rules.base],
	prettier: rules.prettier,
	react: [
		...plugins.react,
		...parsers.react,
		...settings.react,
		...rules.react,
	],
	reactTypescript: rules.reactTypescript,
	typescript: [
		...plugins.typescript,
		...parsers.typescript,
		...settings.typescript,
		...rules.typescript,
	],
	typescriptTypeChecked: [
		...plugins.typescript,
		...parsers.typescript,
		...settings.typescript,
		...rules.typescriptTypeChecked,
	],
};

export default configs;
