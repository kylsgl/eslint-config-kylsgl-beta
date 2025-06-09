import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

import packageJSON from '../../package.json' with { type: 'json' };

export default defineConfig(() => {
	const plugins = [
		typescript({
			allowImportingTsExtensions: false,
			noEmit: false,
			declaration: false,
			tsconfig: './config/tsconfig.json',
		}),
	];

	return {
		external: [
			...Object.keys(packageJSON.dependencies),
			...Object.keys(packageJSON.devDependencies),
		],
		input: './config/eslint/index.ts',
		output: {
			dir: './',
			entryFileNames: 'eslint.config.mjs',
			format: 'esm',
			strict: true,
		},
		plugins,
	};
});
