import { User } from '../../shared/domain/User';
import { IHostUserPrimitives } from './IHostUserPrimitives';
import { HostUserAccountState } from './value-objects/HostUserAccountState';
import { HostUserBiography } from './value-objects/HostUserBiography';
import { HostUserCreatedAt } from './value-objects/HostUserCreatedAt';
import { HostUserEmail } from './value-objects/HostUserEmail';
import { HostUserId } from './value-objects/HostUserId';
import { HostUserName } from './value-objects/HostUserName';
import { HostUserPassword } from './value-objects/HostUserPassword';
import { HostUserSubscriptionType } from './value-objects/HostUserSubscriptionType';
import { HostUserType } from './value-objects/HostUserType';
import { HostUserUpdatedAt } from './value-objects/HostUserUpdatedAt';

export class HostUser extends User<IHostUserPrimitives> {
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
      HostUserId.create(id),
      HostUserName.create(name),
      HostUserBiography.create(biography),
      HostUserEmail.create(email),
      HostUserPassword.create(password, options && options.skipPasswordValidation),
      HostUserType.create(),
      HostUserAccountState.create(accountState),
      HostUserSubscriptionType.create(subscriptionType),
      HostUserCreatedAt.create(createdAt),
      HostUserUpdatedAt.create(updatedAt),
    );
  }

  public override toPrimitives(): IHostUserPrimitives {
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
  ): HostUser {
    return new HostUser(
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
  ): HostUser {
    const defaultPassword = 'defaultPassword';

    return new HostUser(
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
