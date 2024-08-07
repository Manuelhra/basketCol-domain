import {
  asValue,
  Resolver,
  asFunction,
  FunctionReturning,
  asClass,
  Constructor,
} from 'awilix';

export abstract class AwilixDependencySetup {
  public static registerAsValue<T>(value: T): Resolver<T> {
    return asValue(value);
  }

  public static registerAsFunction<T>(fn: FunctionReturning<T>) {
    return asFunction(fn);
  }

  public static registerAsClass<T>(cls: Constructor<T>) {
    return asClass(cls);
  }
}
