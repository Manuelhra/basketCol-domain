import { IAggregateRoot } from './IAggregateRoot';
import UuidValueObject from './value-objects/UuidValueObject';

abstract class AggregateRoot<I extends IAggregateRoot> {
  protected readonly id: UuidValueObject;

  constructor(id: UuidValueObject) {
    this.id = id;
  }

  public abstract toPrimitives(): I;

  public getId(): UuidValueObject {
    return this.id;
  }
}

export default AggregateRoot;
