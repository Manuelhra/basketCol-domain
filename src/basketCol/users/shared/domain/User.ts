import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IUser } from './IUser';
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

export abstract class User<I extends IUser> extends AggregateRoot<I> {
  protected readonly name: UserName;

  protected readonly biography: UserBiography;

  protected readonly email: UserEmail;

  protected readonly password: UserPassword;

  protected readonly type: UserType;

  protected readonly accountStatus: UserAccountState;

  protected readonly subscriptionType: UserSubscriptionType;

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

    this.name = name;
    this.biography = biography;
    this.email = email;
    this.password = password;
    this.type = type;
    this.accountStatus = accountStatus;
    this.subscriptionType = subscriptionType;
  }

  public getName(): UserName {
    return this.name;
  }

  public getBiography(): UserBiography {
    return this.biography;
  }

  public getEmail(): UserEmail {
    return this.email;
  }

  public getPassword(): UserPassword {
    return this.password;
  }

  public getType(): UserType {
    return this.type;
  }
}
