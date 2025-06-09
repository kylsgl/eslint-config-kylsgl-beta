import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

import packageJSON from './package.json' with { type: 'json' };

export default defineConfig(() => {
	const input = './src/index.ts';

	const output = {
		exports: 'named',
		strict: true,
		preserveModules: true,
		dir: './dist',
	};

	const external = [
		...Object.keys(packageJSON.dependencies),
		...Object.keys(packageJSON.devDependencies),
	];

	const plugins = [
		typescript({
			allowImportingTsExtensions: false,
			emitDeclarationOnly: true,
			declaration: true,
			declarationDir: output.dir,
			// exclude: './src/configs',
		}),
	];

	return [
		{
			external,
			input,
			output: {
				...output,
				format: 'esm',
				entryFileNames: '[name].mjs',
			},
			plugins,
		},
		{
			external,
			input,
			output: {
				...output,
				entryFileNames: '[name].js',
				format: 'commonjs',
			},
			plugins,
		},
	];
});
