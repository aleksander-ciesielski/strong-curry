# strong-curry ⚡🍛
`strong-curry` is a tiny package built on the top of `just-curry-it` that provides a strongly-typed implementation of function currying.

The whole implementation included in this package comes from the `just-curry-it`; this project only aims to provide precise typings for the currying process.

## Installation
You can install the `strong-curry` package using `npm`:
```
$ npm i strong-curry --save
```
Alternatively, you can also use `yarn`:
```
$ yarn add strong-curry
```

## Examples
### Basic usage
```ts
import { curry } from "strong-curry";

const multiplyBy = curry((a: number, b: number) => a * b);

const double = multiplyBy(2);
const quadruple = multiplyBy(4);

double(5); // 10
quadruple(3); // 12
```
### Variadic functions
Functions that take a variable number of arguments require an explicitly stated arity when currying; failing to do so will leave the function uncurried:
```ts
import { curry } from "strong-curry";

const sum = (...values: Array<number>) => values.reduce((acc, val) => acc + val, 0);

const sumOf3 = curry(sum, 3);
sumOf3(1, 2, 3); // 6
sumOf3(1)(2, 3); // 6
sumOf3(1, 2)(3); // 6
sumOf3(1)(2)(3); // 6

curry(sum)(1, 2, 3); // 6
curry(sum)(1, 2)(3); // TS2349: This expression is not callable. [...]
```
### `Curried<F, N>` type
`Curried<F, N>` type represents a curried function and is effectively a return type of the `curry` function.

Because `Curried<F, N>` type is [idempotent](https://en.wikipedia.org/wiki/Idempotence), i.e., `Curried<F, N> ≡ Curried<Curried<F, N>, N>`, you can mindlessly use it as a function parameter without worrying about applying it multiple times:
```ts
import { curry, Curried } from "./curry";

type BinaryOperator = (a: number, b: number) => number;
const add = curry<BinaryOperator>((a, b) => a + b);

// Some arbitrary function
const compute = (func: Curried<BinaryOperator>): number => func(func(2, 4))(6);

console.log(compute(add)); // OK
console.log(compute(curry(add))); // OK
console.log(compute(curry(curry(add)))); // OK
```

## Limitations
Like many complex generic typings, this package works by defining multiple overloads to provide the strongly-typed currying. Because of that, there is a maximum of supported parameters (namely 10). Providing a function with 11 or more parameters will yield the type of the uncurried version.
