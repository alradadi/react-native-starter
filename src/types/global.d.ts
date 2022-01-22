type Opt<T> = T | undefined;

type Dict<K extends string | number = string, T = any> = {
  [key in K]: T;
};
