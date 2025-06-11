import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

import packageJSON from '../../package.json' with { type: 'json' };

export default defineConfig(() => {
	return {
		external: [
			...Object.keys(packageJSON.dependencies),
			...Object.keys(packageJSON.devDependencies),
		],
		input: './config/eslint/index.ts',
		output: {
			file: './eslint.config.mjs',
			format: 'esm',
			strict: true,
		},
		plugins: esbuild({
			minify: true,
			platform: 'node',
			supported: {
				'node-colon-prefix-import': true,
			},
			target: ['es2024', 'node22'],
		}),
	};
});
