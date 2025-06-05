import { type Linter } from 'eslint';

export interface Configs {
	readonly base: ReadonlyArray<Readonly<Linter.Config>>;

	readonly prettier: ReadonlyArray<Readonly<Linter.Config>>;
	readonly react: ReadonlyArray<Readonly<Linter.Config>>;
	readonly reactTypescript: ReadonlyArray<Readonly<Linter.Config>>;
	readonly typescript: ReadonlyArray<Readonly<Linter.Config>>;
	readonly typescriptTypeChecked: ReadonlyArray<Readonly<Linter.Config>>;
}

export interface Parsers {
	readonly typescript: Linter.Parser;
}

export interface Plugins {
	readonly base: NonNullable<Linter.Config['plugins']>;
	readonly react: NonNullable<Linter.Config['plugins']>;
	readonly typescript: NonNullable<Linter.Config['plugins']>;
}

export interface Settings {
	readonly base: NonNullable<Linter.Config['settings']>;
	readonly typescript: NonNullable<Linter.Config['settings']>;
}
