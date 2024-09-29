import { CreateMethodNotImplementedError } from './exceptions/CreateMethodNotImplementedError';
import { IAggregateRootPrimitives } from './IAggregateRootPrimitives';
import { DateValueObject } from './value-objects/DateValueObject';
import { UuidValueObject } from './value-objects/UuidValueObject';

export abstract class AggregateRoot<I extends IAggregateRootPrimitives> {
  protected readonly _id: UuidValueObject;

  protected readonly createdAt: DateValueObject;

  protected readonly updatedAt: DateValueObject;

  protected constructor(
    id: UuidValueObject,
    createdAt: DateValueObject,
    updatedAt: DateValueObject,
  ) {
    this._id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public abstract toPrimitives(): I;

  public get id(): UuidValueObject {
    return this._id;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static create(..._args: any[]): AggregateRoot<any> {
    throw CreateMethodNotImplementedError.create(this.name);
  }
}
