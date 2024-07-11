import AggregateRoot from './AggregateRoot';
import BooleanValueObject from './value-objects/BooleanValueObject';
import EmailValueObject from './value-objects/EmailValueObject';
import { PrimitiveValueObject } from './value-objects/PrimitiveValueObject';
import TypeValueObject from './value-objects/TypeValueObject';
import UuidValueObject from './value-objects/UuidValueObject';

abstract class User extends AggregateRoot {
  protected readonly email: EmailValueObject;

  protected password: PrimitiveValueObject<string>;

  protected type: TypeValueObject;

  protected readonly active: BooleanValueObject;

  constructor(
    id: UuidValueObject,
    email: EmailValueObject,
    password: PrimitiveValueObject<string>,
    type: TypeValueObject,
    active: BooleanValueObject,
  ) {
    super(id);

    this.email = email;
    this.password = password;
    this.type = type;
    this.active = active;
  }
}

export default User;
