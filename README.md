<h1 align="center">eslint-config-kylsgl</h1>

<p align="center">
	My personal ESLint rules for JavaScript, TypeScript, and React, based on the
	Airbnb JavaScript Style Guide.
</p>

<p align="center">
	<a href="https://www.npmjs.com/package/eslint-config-kylsgl">
		<img
			alt="NPM Version"
			src="https://img.shields.io/npm/v/eslint-config-kylsgl"
		/>
	</a>
	<a
		href="https://github.com/kylsgl/eslint-config-kylsgl-beta/blob/master/LICENSE"
	>
		<img
			alt="GitHub License"
			src="https://img.shields.io/github/license/kylsgl/eslint-config-kylsgl-beta"
		/>
	</a>
</p>

## Installation

```shell
npm install --save-dev eslint-config-kylsgl
```

> **Requirements**
>
> - ESLint v9.25.0 and above
> - Node.js v22.x and above

## Usage

```js
// eslint.config.mjs

import { configs } from 'eslint-config-kylsgl';

export default [
	...configs.base,
	...configs.typescriptTypeChecked,
	...configs.react,
	...configs.reactTypescript,
	...configs.prettier,
	{
		rules: {
			// Your custom rules
		},
	},
];
```

## License

[MIT](https://github.com/kylsgl/eslint-config-kylsgl-beta/blob/master/LICENSE)
