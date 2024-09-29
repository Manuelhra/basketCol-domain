import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IUserPrimitives } from './IUserPrimitives';
import { UserAccountState } from './value-objects/UserAccountState';
import { UserBiography } from './value-objects/UserBiography';
import { UserCreatedAt } from './value-objects/UserCreatedAt';
import { UserEmail } from './value-objects/UserEmail';
import { UserId } from './value-objects/UserId';
import { UserName } from './value-objects/UserName';
import { UserPassword } from './value-objects/UserPassword';
import { UserSubscriptionType } from './value-objects/UserSubscriptionType';
import { UserType } from './value-objects/UserType';
import { UserUpdatedAt } from './value-objects/UserUpdatedAt';

export abstract class User<I extends IUserPrimitives> extends AggregateRoot<I> {
  protected readonly _name: UserName;

  protected readonly _biography: UserBiography;

  protected readonly _email: UserEmail;

  protected readonly _password: UserPassword;

  protected readonly _type: UserType;

  protected readonly _accountStatus: UserAccountState;

  protected readonly _subscriptionType: UserSubscriptionType;

  protected constructor(
    id: UserId,
    name: UserName,
    biography: UserBiography,
    email: UserEmail,
    password: UserPassword,
    type: UserType,
    accountStatus: UserAccountState,
    subscriptionType: UserSubscriptionType,
    createdAt: UserCreatedAt,
    updatedAt: UserUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this._name = name;
    this._biography = biography;
    this._email = email;
    this._password = password;
    this._type = type;
    this._accountStatus = accountStatus;
    this._subscriptionType = subscriptionType;
  }

  public get name(): UserName {
    return this._name;
  }

  public get biography(): UserBiography {
    return this._biography;
  }

  public get email(): UserEmail {
    return this._email;
  }

  public get password(): UserPassword {
    return this._password;
  }

  public get type(): UserType {
    return this._type;
  }

  public get accountStatus(): UserAccountState {
    return this._accountStatus;
  }

  public get subscriptionType(): UserSubscriptionType {
    return this._subscriptionType;
  }
}
