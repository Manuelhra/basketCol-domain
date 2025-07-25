import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IUserPrimitives } from './IUserPrimitives';
import { UserAccountState } from './value-objects/UserAccountState';
import { UserBiography } from './value-objects/UserBiography';
import { UserCreatedAt } from './value-objects/UserCreatedAt';
import { UserEmail } from './value-objects/UserEmail';
import { UserGender } from './value-objects/UserGender';
import { UserId } from './value-objects/UserId';
import { UserName } from './value-objects/UserName';
import { UserPassword } from './value-objects/UserPassword';
import { UserProfileImage } from './value-objects/UserProfileImage';
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

  protected readonly _profileImage: UserProfileImage;

  protected readonly _gender: UserGender;

  protected constructor(
    id: UserId,
    name: UserName,
    biography: UserBiography,
    email: UserEmail,
    password: UserPassword,
    gender: UserGender,
    type: UserType,
    accountStatus: UserAccountState,
    subscriptionType: UserSubscriptionType,
    profileImage: UserProfileImage,
    createdAt: UserCreatedAt,
    updatedAt: UserUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this._name = name;
    this._biography = biography;
    this._email = email;
    this._password = password;
    this._gender = gender;
    this._type = type;
    this._accountStatus = accountStatus;
    this._subscriptionType = subscriptionType;
    this._profileImage = profileImage;
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

  public get gender(): UserGender {
    return this._gender;
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

  public get profileImage(): UserProfileImage {
    return this._profileImage;
  }
}
