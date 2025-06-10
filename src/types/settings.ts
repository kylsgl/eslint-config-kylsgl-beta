export interface SettingConfig {
	readonly files: Array<string | string[]>;
	readonly settings: Record<string, unknown>;
}

export interface Settings {
	readonly base: readonly SettingConfig[];
	readonly typescript: readonly SettingConfig[];
}
