import { CreateMethodNotImplementedError } from './exceptions/CreateMethodNotImplementedError';
import { IAggregateRoot } from './IAggregateRoot';
import { DateValueObject } from './value-objects/DateValueObject';
import { UuidValueObject } from './value-objects/UuidValueObject';

export abstract class AggregateRoot<I extends IAggregateRoot> {
  protected readonly id: UuidValueObject;

  protected readonly createdAt: DateValueObject;

  protected readonly updatedAt: DateValueObject;

  protected constructor(
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static create(..._args: any[]): AggregateRoot<any> {
    throw new CreateMethodNotImplementedError(this.name);
  }
}
