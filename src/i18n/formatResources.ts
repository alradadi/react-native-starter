type Resource<K extends string, V> = {
  [language: string]: ResourceLanguage<K, V>;
};

type ResourceLanguage<K extends string, V> = {
  [namespace: string]: ResourceKey<K, V>;
};

type ResourceKey<K extends string, V> = {
  [key in K]: V;
};

type Namespace<K extends string, V> = {
  namespace: string;
  strings: {
    en: ResourceKey<K, V>;
    ar: ResourceKey<K, V>;
  };
};

/**
 * The types above just ensure that the (translate/t) function is typed.
 * We don't want to accidentally use a key that doesn't exist in the resources.
 */
export const formatResources = <A extends string, B>(
  namespaces: Namespace<A, B>[],
) => {
  return namespaces.reduce(
    (previousValue, currentValue) => {
      previousValue.en = {
        ...previousValue.en,
        [currentValue.namespace]: currentValue.strings.en,
      };
      previousValue.ar = {
        ...previousValue.ar,
        [currentValue.namespace]: currentValue.strings.ar,
      };
      return previousValue;
    },
    { en: {}, ar: {} } as Resource<A, B>,
  );
};
