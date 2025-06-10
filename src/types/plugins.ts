import { type ESLint } from 'eslint';

export interface PluginConfig {
	readonly files: Array<string | string[]>;
	readonly plugins: Record<string, ESLint.Plugin>;
}

export interface Plugins {
	readonly base: readonly PluginConfig[];
	readonly react: readonly PluginConfig[];
	readonly typescript: readonly PluginConfig[];
}
