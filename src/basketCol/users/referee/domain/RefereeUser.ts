import { User } from '../../shared/domain/User';
import { IRefereeUserPrimitives } from './IRefereeUserPrimitives';
import { RefereeUserAccountState } from './value-objects/RefereeUserAccountState';
import { RefereeUserBiography } from './value-objects/RefereeUserBiography';
import { RefereeUserCreatedAt } from './value-objects/RefereeUserCreatedAt';
import { RefereeUserEmail } from './value-objects/RefereeUserEmail';
import { RefereeUserId } from './value-objects/RefereeUserId';
import { RefereeUserName } from './value-objects/RefereeUserName';
import { RefereeUserPassword } from './value-objects/RefereeUserPassword';
import { RefereeUserSubscriptionType } from './value-objects/RefereeUserSubscriptionType';
import { RefereeUserType } from './value-objects/RefereeUserType';
import { RefereeUserUpdatedAt } from './value-objects/RefereeUserUpdatedAt';

export class RefereeUser extends User<IRefereeUserPrimitives> {
  private constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean },
    password: string,
    accountState: string,
    subscriptionType: string,
    createdAt: string,
    updatedAt: string,
    options?: { skipPasswordValidation: boolean; },
  ) {
    super(
      RefereeUserId.create(id),
      RefereeUserName.create(name),
      RefereeUserBiography.create(biography),
      RefereeUserEmail.create(email),
      RefereeUserPassword.create(password, options && options.skipPasswordValidation),
      RefereeUserType.create(),
      RefereeUserAccountState.create(accountState),
      RefereeUserSubscriptionType.create(subscriptionType),
      RefereeUserCreatedAt.create(createdAt),
      RefereeUserUpdatedAt.create(updatedAt),
    );
  }

  public override toPrimitives(): IRefereeUserPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      biography: this.biography.value,
      email: this.email.value,
      password: this.password.value,
      type: this.type.value,
      accountStatus: this.accountStatus.value,
      subscriptionType: this.subscriptionType.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean },
    password: string,
    accountState: string,
    subscriptionType: string,
    createdAt: string,
    updatedAt: string,
  ): RefereeUser {
    return new RefereeUser(
      id,
      name,
      biography,
      email,
      password,
      accountState,
      subscriptionType,
      createdAt,
      updatedAt,
    );
  }

  public static createWithoutPassword(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean },
    accountState: string,
    subscriptionType: string,
    createdAt: string,
    updatedAt: string,
  ): RefereeUser {
    const defaultPassword = 'defaultPassword';

    return new RefereeUser(
      id,
      name,
      biography,
      email,
      defaultPassword,
      accountState,
      subscriptionType,
      createdAt,
      updatedAt,
      { skipPasswordValidation: true },
    );
  }
}
