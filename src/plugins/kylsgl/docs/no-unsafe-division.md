# kylsgl/no-unsafe-division

💼 This rule is enabled in the following configs: ✅ `base`.

Enforces checks to prevent potential division by `0`.

## Fail ❌

```js
1 / 0;

1 % 0;

function divide(divisor) {
	return 1 / divisor;
}
```

## Pass ✔️

```js
1 / 1;

1 % 1;

function divide(divisor) {
	return divisor === 0 ? 0 : 1 / divisor;
}
```

## Options

### ignorePascalCase

Type: `boolean`\
Default: `true`

When enabled, the rule will ignore variables written in `PascalCase`, which are typically used for enums, objects, or classes.

#### Example:

```js
const DivisorObj = {
	zero: 0,
};

const result = 1 / DivisorObj.zero; // Allowed if 'ignorePascalCase' is set to 'true'
```

### ignoreScreamingSnakeCase

Type: `boolean`\
Default: `true`

When enabled, the rule will ignore variables written in `SCREAMING_SNAKE_CASE`, which are typically used for constants.

#### Example:

```js
const DIVISOR_ZERO = 0;

const result = 1 / DIVISOR_ZERO; // Allowed if 'ignoreScreamingSnakeCase' is set to 'true'
```
