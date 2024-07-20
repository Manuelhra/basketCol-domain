import { IAggregateRoot } from './IAggregateRoot';
import { DateValueObject } from './value-objects/DateValueObject';
import { UuidValueObject } from './value-objects/UuidValueObject';

export abstract class AggregateRoot<I extends IAggregateRoot> {
  protected readonly id: UuidValueObject;

  protected readonly createdAt: DateValueObject;

  protected readonly updatedAt: DateValueObject;

  constructor(
    id: UuidValueObject,
    createdAt: DateValueObject,
    updatedAt: DateValueObject,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public abstract toPrimitives(): I;

  public getId(): UuidValueObject {
    return this.id;
  }
}

