export interface INewableClass<T> extends Function {
  new (...args: any[]): T;
}
