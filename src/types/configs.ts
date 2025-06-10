import { type Linter } from 'eslint';

export interface Configs {
	readonly base: ReadonlyArray<Readonly<Linter.Config>>;
	readonly prettier: ReadonlyArray<Readonly<Linter.Config>>;
	readonly react: ReadonlyArray<Readonly<Linter.Config>>;
	readonly reactTypescript: ReadonlyArray<Readonly<Linter.Config>>;
	readonly typescript: ReadonlyArray<Readonly<Linter.Config>>;
	readonly typescriptTypeChecked: ReadonlyArray<Readonly<Linter.Config>>;
}
