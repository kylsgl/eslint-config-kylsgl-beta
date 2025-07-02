<h1 align="center">eslint-config-kylsgl</h1>

<p align="center">
    My personal ESLint rules for JavaScript, TypeScript, and React, based on the Airbnb JavaScript Style Guide.
</p>

<div align="center">
    <a href="https://www.npmjs.com/package/eslint-config-kylsgl" style="text-decoration: none;">
        <img alt="NPM Version" src="https://img.shields.io/npm/v/eslint-config-kylsgl" />
    </a>
    <a href="https://github.com/kylsgl/eslint-config-kylsgl-beta/actions/workflows/ci.yml" style="text-decoration: none;">
        <img alt="CI Status" src="https://img.shields.io/github/actions/workflow/status/kylsgl/eslint-config-kylsgl-beta/ci.yml?label=CI" />
    </a>
    <a href="https://codecov.io/github/kylsgl/eslint-config-kylsgl-beta" style="text-decoration: none;">
        <img alt="Codecov Coverage" src="https://codecov.io/github/kylsgl/eslint-config-kylsgl-beta/branch/main/graph/badge.svg?token=7PW768FR8S" />
    </a>
    <a href="https://github.com/kylsgl/eslint-config-kylsgl-beta/blob/master/LICENSE" style="text-decoration: none;">
        <img alt="GitHub License" src="https://img.shields.io/github/license/kylsgl/eslint-config-kylsgl-beta" />
    </a>
</div>


## Installation

```shell
npm install --save-dev eslint-config-kylsgl
```

> [!IMPORTANT]
>
> **Requirements**
>
> - ESLint v9.25.x and above
> - Node.js v22.x and above
> - ESM

## Usage

```js
// eslint.config.mjs
import { configs } from 'eslint-config-kylsgl';

export default [
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.prettier,
	{
		rules: {
			// Your custom rules
		},
	},
];
```

### TypeScript

This config disables some rules in favor of TypeScript's own type checking.

```json
// tsconfig.json
{
	"compilerOptions": {
		"strict": true,
		"allowUnreachableCode": false,
		"noFallthroughCasesInSwitch": true,
		"noImplicitOverride": true,
		"noImplicitReturns": true,
		"noPropertyAccessFromIndexSignature": true,
		"noUncheckedSideEffectImports": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true
	}
}
```

## Rules

Rules for `eslint-plugin-kylsgl`

💼 Configurations enabled in.\
✅ Set in the `base` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/use/command-line-interface#--fix).\
💡 Manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

| Name                            | Description                                                  | 💼  | 🔧  | 💡  |
| ------------------------------- | ------------------------------------------------------------ | --- | --- | --- |
| no-default-params               | Disallow assigning default value to function parameters      |     |     |     |
| no-toplevel-function-expression | Disallow defining function expression at the top-level scope | ✅  |     |     |
| no-unsafe-division              | Enforce divisor checks to prevent potential division by zero | ✅  |     |     |

## License

[MIT](https://github.com/kylsgl/eslint-config-kylsgl-beta/blob/master/LICENSE)
