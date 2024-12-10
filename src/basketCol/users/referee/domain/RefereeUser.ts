import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { User } from '../../shared/domain/User';
import { IRefereeUserPrimitives } from './IRefereeUserPrimitives';
import { RefereeUserAccountState } from './value-objects/RefereeUserAccountState';
import { RefereeUserBiography } from './value-objects/RefereeUserBiography';
import { RefereeUserCreatedAt } from './value-objects/RefereeUserCreatedAt';
import { RefereeUserEmail } from './value-objects/RefereeUserEmail';
import { RefereeUserGender } from './value-objects/RefereeUserGender';
import { RefereeUserId } from './value-objects/RefereeUserId';
import { RefereeUserName } from './value-objects/RefereeUserName';
import { RefereeUserPassword } from './value-objects/RefereeUserPassword';
import { RefereeUserProfileImage } from './value-objects/RefereeUserProfileImage';
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
    gender: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
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
      RefereeUserGender.create(gender),
      RefereeUserType.create(),
      RefereeUserAccountState.create(accountState),
      RefereeUserSubscriptionType.create(subscriptionType),
      RefereeUserProfileImage.create(profileImage),
      RefereeUserCreatedAt.create(createdAt),
      RefereeUserUpdatedAt.create(updatedAt),
    );
  }

  public override get toPrimitives(): IRefereeUserPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      biography: this.biography.value,
      email: this.email.value,
      password: this.password.value,
      gender: this.gender.value,
      type: this.type.value,
      accountStatus: this.accountStatus.value,
      subscriptionType: this.subscriptionType.value,
      profileImage: this.profileImage.value,
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
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
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
      gender,
      subscriptionType,
      profileImage,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean },
    password: string,
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
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
      gender,
      subscriptionType,
      profileImage,
      createdAt,
      updatedAt,
      { skipPasswordValidation: true },
    );
  }

  public static createWithoutPassword(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean },
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
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
      gender,
      accountState,
      subscriptionType,
      profileImage,
      createdAt,
      updatedAt,
      { skipPasswordValidation: true },
    );
  }
}
