import { type Linter } from 'eslint';

const ignoresConfig: Readonly<Linter.Config> = {
	ignores: [
		'dist',
		'node_modules',
		'./eslint.config.mjs',
		'./src/generatedRules.ts',
		'**/*.{js,jsx,cjs,mjs}',
	],
	name: 'base/ignores',
};

export default [ignoresConfig];
