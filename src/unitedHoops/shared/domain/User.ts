import AggregateRoot from './AggregateRoot';
import BooleanValueObject from './value-objects/BooleanValueObject';
import EmailValueObject from './value-objects/EmailValueObject';
import { PrimitiveValueObject } from './value-objects/PrimitiveValueObject';
import UuidValueObject from './value-objects/UuidValueObject';

abstract class User extends AggregateRoot {
  protected readonly email: EmailValueObject;

  protected readonly password: PrimitiveValueObject<string>;

  protected readonly active: BooleanValueObject;

  constructor(
    id: UuidValueObject,
    email: EmailValueObject,
    password: PrimitiveValueObject<string>,
    active: BooleanValueObject,
  ) {
    super(id);

    this.email = email;
    this.password = password;
    this.active = active;
  }
}

export default User;
