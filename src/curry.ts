import type { WithoutFirstElements, Length } from "./util";
import * as _curry from "just-curry-it";

type AnyFunction = (...args: Array<any>) => any;

type PartiallyApplied<F extends AnyFunction, N extends number> = (...args: WithoutFirstElements<Parameters<F>, N>) => ReturnType<F>;

type Params<F extends AnyFunction, N extends number, _S extends Array<unknown> = []> =
  Length<_S> extends N
    ? _S
    : Params<F, N, [..._S, Parameters<F>[Length<_S>]]>;

interface Curried0<F extends AnyFunction> {
  (...args: Params<F, 0>): ReturnType<F>;
}

interface Curried1<F extends AnyFunction> {
  (...args: Params<F, 1>): ReturnType<F>;
}

interface Curried2<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried1<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): ReturnType<F>;
}

interface Curried3<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried2<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried1<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): ReturnType<F>;
}

interface Curried4<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried3<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried2<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): Curried1<PartiallyApplied<F, 3>>;
  (...args: Params<F, 4>): ReturnType<F>;
}

interface Curried5<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried4<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried3<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): Curried2<PartiallyApplied<F, 3>>;
  (...args: Params<F, 4>): Curried1<PartiallyApplied<F, 4>>;
  (...args: Params<F, 5>): ReturnType<F>;
}

interface Curried6<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried5<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried4<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): Curried3<PartiallyApplied<F, 3>>;
  (...args: Params<F, 4>): Curried2<PartiallyApplied<F, 4>>;
  (...args: Params<F, 5>): Curried1<PartiallyApplied<F, 5>>;
  (...args: Params<F, 6>): ReturnType<F>;
}

interface Curried7<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried6<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried5<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): Curried4<PartiallyApplied<F, 3>>;
  (...args: Params<F, 4>): Curried3<PartiallyApplied<F, 4>>;
  (...args: Params<F, 5>): Curried2<PartiallyApplied<F, 5>>;
  (...args: Params<F, 6>): Curried1<PartiallyApplied<F, 6>>;
  (...args: Params<F, 7>): ReturnType<F>;
}

interface Curried8<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried7<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried6<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): Curried5<PartiallyApplied<F, 3>>;
  (...args: Params<F, 4>): Curried4<PartiallyApplied<F, 4>>;
  (...args: Params<F, 5>): Curried3<PartiallyApplied<F, 5>>;
  (...args: Params<F, 6>): Curried2<PartiallyApplied<F, 6>>;
  (...args: Params<F, 7>): Curried1<PartiallyApplied<F, 7>>;
  (...args: Params<F, 8>): ReturnType<F>;
}

interface Curried9<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried8<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried7<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): Curried6<PartiallyApplied<F, 3>>;
  (...args: Params<F, 4>): Curried5<PartiallyApplied<F, 4>>;
  (...args: Params<F, 5>): Curried4<PartiallyApplied<F, 5>>;
  (...args: Params<F, 6>): Curried3<PartiallyApplied<F, 6>>;
  (...args: Params<F, 7>): Curried2<PartiallyApplied<F, 7>>;
  (...args: Params<F, 8>): Curried1<PartiallyApplied<F, 8>>;
  (...args: Params<F, 9>): ReturnType<F>;
}

interface Curried10<F extends AnyFunction> {
  (...args: Params<F, 1>): Curried9<PartiallyApplied<F, 1>>;
  (...args: Params<F, 2>): Curried8<PartiallyApplied<F, 2>>;
  (...args: Params<F, 3>): Curried7<PartiallyApplied<F, 3>>;
  (...args: Params<F, 4>): Curried6<PartiallyApplied<F, 4>>;
  (...args: Params<F, 5>): Curried5<PartiallyApplied<F, 5>>;
  (...args: Params<F, 6>): Curried4<PartiallyApplied<F, 6>>;
  (...args: Params<F, 7>): Curried3<PartiallyApplied<F, 7>>;
  (...args: Params<F, 8>): Curried2<PartiallyApplied<F, 8>>;
  (...args: Params<F, 9>): Curried1<PartiallyApplied<F, 9>>;
  (...args: Params<F, 10>): ReturnType<F>;
}

type CurriedMapping<F extends AnyFunction, N extends number> =
  N extends 0 ? Curried0<F> :
  N extends 1 ? Curried1<F> :
  N extends 2 ? Curried2<F> :
  N extends 3 ? Curried3<F> :
  N extends 4 ? Curried4<F> :
  N extends 5 ? Curried5<F> :
  N extends 6 ? Curried6<F> :
  N extends 7 ? Curried7<F> :
  N extends 8 ? Curried8<F> :
  N extends 9 ? Curried9<F> :
  N extends 10 ? Curried10<F> :
  F;

export type Curried<F extends AnyFunction, N extends number = Length<Parameters<F>>> = CurriedMapping<F, N>;

type CurryFunction = <F extends AnyFunction, N extends number = Length<Parameters<F>>>(
  func: F,
  arity?: N,
) => Curried<F, N>;

export const curry = _curry as unknown as CurryFunction;
