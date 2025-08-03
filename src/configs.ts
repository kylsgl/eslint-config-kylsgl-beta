import rules from './generated-rules';
import ignores from './ignores';
import parsers from './parsers';
import { plugins } from './plugins';
import settings from './settings';
import { type Configs } from './types';

const configs: Configs = {
	base: [
		...plugins.base,
		...parsers.base,
		...settings.base,
		...rules.base,
		ignores,
	],
	prettier: rules.prettier,
	react: [
		...plugins.react,
		...parsers.react,
		...settings.react,
		...rules.react,
	],
	reactTypeScript: rules.reactTypeScript,
	typeScript: [
		...plugins.typeScript,
		...parsers.typeScript,
		...settings.typeScript,
		...rules.typeScript,
	],
	typeScriptTypeChecked: [
		...plugins.typeScript,
		...parsers.typeScript,
		...settings.typeScript,
		...rules.typeScriptTypeChecked,
	],
};

export default configs;
