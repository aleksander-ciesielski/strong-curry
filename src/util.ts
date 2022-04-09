export type Length<A extends Array<unknown>> = A["length"];

export type Tail<A extends Array<unknown>> =
  A extends [unknown, ...infer T]
    ? T
    : A extends Array<unknown> ? A : never;

export type Head<A extends Array<unknown>> =
  A extends [infer T, ...Array<unknown>]
    ? T
    : A extends Array<infer T> ? T : never;

export type WithoutFirstElements<A extends Array<unknown>, N extends number, _S extends Array<unknown> = []> =
  Length<_S> extends N
    ? A
    : WithoutFirstElements<Tail<A>, N, [Head<A>, ..._S]>;
