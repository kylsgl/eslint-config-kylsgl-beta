# kylsgl/no-toplevel-function-expression

💼 This rule is enabled in the following configs: ✅ `base`.

Disallows defining function expressions at the top-level scope.

## ❌ Fail

```js
const fn = function () {
	// do something
};

const fn = () => {
	// do something
};
```

## ✔️ Pass

```js
function fn() {
	// do something
}
```
