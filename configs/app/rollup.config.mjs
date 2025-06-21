import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

import packageJSON from '../../package.json' with { type: 'json' };

export default defineConfig(() => {
	const input = './src/index.ts';

	const output = {
		exports: 'named',
		strict: true,
	};

	const external = [
		...Object.keys(packageJSON.dependencies),
		...Object.keys(packageJSON.devDependencies),
	];

	const plugins = [
		esbuild({
			minify: true,
			platform: 'node',
			supported: {
				'node-colon-prefix-import': true,
			},
			target: ['es2024', 'node22'],
		}),
	];

	return [
		{
			input,
			output: {
				file: './dist/index.d.ts',
				format: 'esm',
			},
			plugins: [dts()],
		},
		{
			external,
			input,
			output: {
				...output,
				file: './dist/index.mjs',
				format: 'esm',
			},
			plugins,
		},
		{
			external,
			input,
			output: {
				...output,
				file: './dist/index.js',
				format: 'commonjs',
			},
			plugins,
		},
	];
});
