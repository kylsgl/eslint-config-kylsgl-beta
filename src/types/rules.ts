import { type Linter } from 'eslint';

export interface RuleConfig {
	readonly files?: Array<string | string[]>;
	readonly ignores?: string[];
	readonly name?: string;
	readonly rules: Partial<Linter.RulesRecord>;
}

export interface Rules {
	readonly base: readonly RuleConfig[];
	readonly prettier: readonly RuleConfig[];
	readonly react: readonly RuleConfig[];
	readonly reactTypescript: readonly RuleConfig[];
	readonly typescript: readonly RuleConfig[];
	readonly typescriptTypeChecked: readonly RuleConfig[];
}
