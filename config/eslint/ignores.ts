import { type Linter } from 'eslint';

const ignoresConfig: Readonly<Linter.Config> = {
	ignores: [
		'coverage/*',
		'dist*/*',
		'node_modules/*',
		'patches/*',
		'./eslint.config.mjs',
		'./src/generatedConfigs.ts',
		'**/*.{js,jsx,cjs,mjs}',
	],
	name: 'base/ignores',
};

export default [ignoresConfig];
