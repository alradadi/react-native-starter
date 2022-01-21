type Exact<A, B> = A extends B ? (B extends A ? true : false) : false;
type EnforceExact<A, B> = Exact<A, B> extends true ? B : Omit<A, keyof B>;

type Strings<A, B> = {
  en: EnforceExact<A, B>;
  ar: EnforceExact<B, A>;
};

/**
 * All the typing above is just to make sure that both en and ar objects are structurally equivalent.
 * We don't want to have keys that exist in one object but not the other.
 */
export const createNamespace = <A, B>(
  namespace: string,
  strings: Strings<A, B>,
) => {
  return {
    namespace,
    strings,
  };
};
