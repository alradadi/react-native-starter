type Opt<T> = T | undefined;

interface Dict<T = any> {
  [key: string]: T;
}

interface Location {
  latitude: number;
  longitude: number;
}
