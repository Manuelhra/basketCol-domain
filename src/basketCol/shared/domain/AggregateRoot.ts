import UuidValueObject from './value-objects/UuidValueObject';

abstract class AggregateRoot {
  protected readonly id: UuidValueObject;

  constructor(id: UuidValueObject) {
    this.id = id;
  }

  public abstract toPrimitives(): any;

  public getId(): UuidValueObject {
    return this.id;
  }
}

export default AggregateRoot;
