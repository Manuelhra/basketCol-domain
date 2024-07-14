import AggregateRoot from '../../../shared/domain/AggregateRoot';
import { PrimitiveValueObject } from '../../../shared/domain/value-objects/PrimitiveValueObject';
import { IUser } from './IUser';
import UserActive from './value-objects/UserActive';
import UserEmail from './value-objects/UserEmail';
import UserId from './value-objects/UserId';
import UserPassword from './value-objects/UserPassword';
import UserType from './value-objects/UserType';

abstract class User extends AggregateRoot<IUser> {
  protected readonly email: UserEmail;

  protected password: PrimitiveValueObject<string>;

  protected type: UserType;

  protected readonly active: UserActive;

  constructor(
    id: UserId,
    email: UserEmail,
    password: UserPassword,
    type: UserType,
    active: UserActive,
  ) {
    super(id);

    this.email = email;
    this.password = password;
    this.type = type;
    this.active = active;
  }
}

export default User;
