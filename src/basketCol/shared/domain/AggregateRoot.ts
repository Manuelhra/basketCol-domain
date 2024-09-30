import { CreateMethodNotImplementedError } from './exceptions/CreateMethodNotImplementedError';
import { IAggregateRootPrimitives } from './IAggregateRootPrimitives';
import { DateValueObject } from './value-objects/DateValueObject';
import { UuidValueObject } from './value-objects/UuidValueObject';

export abstract class AggregateRoot<I extends IAggregateRootPrimitives> {
  private readonly _id: UuidValueObject;

  private readonly _createdAt: DateValueObject;

  private readonly _updatedAt: DateValueObject;

  protected constructor(
    id: UuidValueObject,
    createdAt: DateValueObject,
    updatedAt: DateValueObject,
  ) {
    this._id = id;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  public abstract toPrimitives(): I;

  public get id(): UuidValueObject {
    return this._id;
  }

  public get createdAt(): DateValueObject {
    return this._createdAt;
  }

  public get updatedAt(): DateValueObject {
    return this._updatedAt;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static create(..._args: any[]): AggregateRoot<any> {
    throw CreateMethodNotImplementedError.create(this.name);
  }
}
