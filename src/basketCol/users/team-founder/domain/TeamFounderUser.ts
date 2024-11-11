import { User } from '../../shared/domain/User';
import { ITeamFounderUserPrimitives } from './ITeamFounderUserPrimitives';
import { TeamFounderUserId } from './value-objects/TeamFounderUserId';
import { TeamFounderUserBiography } from './value-objects/TeamFounderUserBiography';
import { TeamFounderUserCreatedAt } from './value-objects/TeamFounderUserCreatedAt';
import { TeamFounderUserEmail } from './value-objects/TeamFounderUserEmail';
import { TeamFounderUserName } from './value-objects/TeamFounderUserName';
import { TeamFounderUserPassword } from './value-objects/TeamFounderUserPassword';
import { TeamFounderUserType } from './value-objects/TeamFounderUserType';
import { TeamFounderUserUpdatedAt } from './value-objects/TeamFounderUserUpdatedAt';
import { TeamFounderUserAccountState } from './value-objects/TeamFounderUserAccountState';
import { TeamFounderUserSubscriptionType } from './value-objects/TeamFounderUserSubscriptionType';
import { TeamFounderUserProfileImage } from './value-objects/TeamFounderUserProfileImage';
import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { TeamFounderUserGender } from './value-objects/TeamFounderUserGender';

export class TeamFounderUser extends User<ITeamFounderUserPrimitives> {
  private constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean; },
    password: string,
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
    createdAt: string,
    updatedAt: string,
    options?: { skipPasswordValidation: boolean; },
  ) {
    super(
      TeamFounderUserId.create(id),
      TeamFounderUserName.create(name),
      TeamFounderUserBiography.create(biography),
      TeamFounderUserEmail.create(email),
      TeamFounderUserPassword.create(password, options && options.skipPasswordValidation),
      TeamFounderUserGender.create(gender),
      TeamFounderUserType.create(),
      TeamFounderUserAccountState.create(accountState),
      TeamFounderUserSubscriptionType.create(subscriptionType),
      TeamFounderUserProfileImage.create(profileImage),
      TeamFounderUserCreatedAt.create(createdAt),
      TeamFounderUserUpdatedAt.create(updatedAt),
    );
  }

  public override get toPrimitives(): ITeamFounderUserPrimitives {
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
    email: { value: string; verified: boolean; },
    password: string,
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
    createdAt: string,
    updatedAt: string,
  ): TeamFounderUser {
    return new TeamFounderUser(
      id,
      name,
      biography,
      email,
      password,
      gender,
      accountState,
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
    email: { value: string; verified: boolean; },
    password: string,
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
    createdAt: string,
    updatedAt: string,
  ): TeamFounderUser {
    return new TeamFounderUser(
      id,
      name,
      biography,
      email,
      password,
      gender,
      accountState,
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
    email: { value: string; verified: boolean; },
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
    createdAt: string,
    updatedAt: string,
  ): TeamFounderUser {
    const defaultPassword = 'defaultPassword';

    return new TeamFounderUser(
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
    );
  }
}
