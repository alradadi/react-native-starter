import { Diff } from 'utility-types';

type Exact<A, B> = A extends B ? (B extends A ? true : false) : false;

type EnforceExact<A extends object, B extends object> = Exact<A, B> extends true
  ? A
  : Diff<B, A>;

type Strings<S1 extends object, S2 extends object> = {
  en: EnforceExact<S1, S2>;
  ar: EnforceExact<S2, S1>;
};

type Resource<N extends string, S1, S2> = {
  en: {
    [key in N]: S1;
  };
  ar: {
    [key in N]: S2;
  };
};

/**
 * All the typing above is just to make sure that both en and ar objects are structurally equivalent.
 * We don't want to have keys that exist in one object but not the other.
 */
export const createResource = <
  N extends string,
  S1 extends object,
  S2 extends object,
>(
  namespace: N,
  strings: Strings<S1, S2>,
): Resource<N, S1, S2> => {
  return {
    en: {
      [namespace]: strings.en,
    },
    ar: {
      [namespace]: strings.ar,
    },
  } as Resource<N, S1, S2>;
};
