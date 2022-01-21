type Opt<T> = T | undefined;

type Subtract<T extends T1, T1 extends object> = Omit<T, keyof T1>;

interface Dict<T = any> {
  [key: string]: T;
}

interface Location {
  latitude: number;
  longitude: number;
}
