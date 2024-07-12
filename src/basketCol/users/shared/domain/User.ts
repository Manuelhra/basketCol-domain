import AggregateRoot from '../../../shared/domain/AggregateRoot';
import BooleanValueObject from '../../../shared/domain/value-objects/BooleanValueObject';
import { PrimitiveValueObject } from '../../../shared/domain/value-objects/PrimitiveValueObject';
import UuidValueObject from '../../../shared/domain/value-objects/UuidValueObject';
import EmailValueObject from './value-objects/EmailValueObject';
import TypeValueObject from './value-objects/TypeValueObject';

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
