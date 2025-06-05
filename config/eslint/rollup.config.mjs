import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

import packageJSON from '../../package.json' with { type: 'json' };

// eslint-disable-next-line no-unused-vars
export default defineConfig((_args) => {
	const plugins = [
		esbuild({
			format: 'esm',
			minify: false,
			platform: 'node',
			supported: {
				'node-colon-prefix-import': true,
			},
			target: ['es2024', 'node22'],
		}),
		// typescript({
		// 	lib: ['es5', 'es6', 'dom'],
		// 	target: 'es5',
		// 	allowImportingTsExtensions: false,
		// 	noEmit: false,
		// 	declaration: false,
		// 	tsconfig:"./config/tsconfig.json"
		// }),
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
