import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { PrimitiveValueObject } from '../../../shared/domain/value-objects/PrimitiveValueObject';
import { IUser } from './IUser';
import { UserActive } from './value-objects/UserActive';
import { UserBiography } from './value-objects/UserBiography';
import { UserCreatedAt } from './value-objects/UserCreatedAt';
import { UserEmail } from './value-objects/UserEmail';
import { UserId } from './value-objects/UserId';
import { UserName } from './value-objects/UserName';
import { UserPassword } from './value-objects/UserPassword';
import { UserType } from './value-objects/UserType';
import { UserUpdatedAt } from './value-objects/UserUpdatedAt';

export abstract class User<I extends IUser> extends AggregateRoot<I> {
  protected readonly name: UserName;

  protected readonly biography: UserBiography;

  protected readonly email: UserEmail;

  protected readonly password: PrimitiveValueObject<string>;

  protected readonly type: UserType;

  protected readonly active: UserActive;

  protected constructor(
    id: UserId,
    name: UserName,
    biography: UserBiography,
    email: UserEmail,
    password: UserPassword,
    type: UserType,
    active: UserActive,
    createdAt: UserCreatedAt,
    updatedAt: UserUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this.name = name;
    this.biography = biography;
    this.email = email;
    this.password = password;
    this.type = type;
    this.active = active;
  }

  public static get type(): UserType {
    return this.type;
  }
}
