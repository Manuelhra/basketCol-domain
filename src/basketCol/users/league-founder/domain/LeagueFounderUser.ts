import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { User } from '../../shared/domain/User';
import { ILeagueFounderUserPrimitives } from './ILeagueFounderUserPrimitives';
import { LeagueFounderUserAccountState } from './value-objects/LeagueFounderUserAccountState';
import { LeagueFounderUserBiography } from './value-objects/LeagueFounderUserBiography';
import { LeagueFounderUserCreatedAt } from './value-objects/LeagueFounderUserCreatedAt';
import { LeagueFounderUserEmail } from './value-objects/LeagueFounderUserEmail';
import { LeagueFounderUserGender } from './value-objects/LeagueFounderUserGender';
import { LeagueFounderUserId } from './value-objects/LeagueFounderUserId';
import { LeagueFounderUserName } from './value-objects/LeagueFounderUserName';
import { LeagueFounderUserPassword } from './value-objects/LeagueFounderUserPassword';
import { LeagueFounderUserProfileImage } from './value-objects/LeagueFounderUserProfileImage';
import { LeagueFounderUserSubscriptionType } from './value-objects/LeagueFounderUserSubscriptionType';
import { LeagueFounderUserType } from './value-objects/LeagueFounderUserType';
import { LeagueFounderUserUpdatedAt } from './value-objects/LeagueFounderUserUpdatedAt';

export class LeagueFounderUser extends User<ILeagueFounderUserPrimitives> {
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
      LeagueFounderUserId.create(id),
      LeagueFounderUserName.create(name),
      LeagueFounderUserBiography.create(biography),
      LeagueFounderUserEmail.create(email),
      LeagueFounderUserPassword.create(password, options && options.skipPasswordValidation),
      LeagueFounderUserGender.create(gender),
      LeagueFounderUserType.create(),
      LeagueFounderUserAccountState.create(accountState),
      LeagueFounderUserSubscriptionType.create(subscriptionType),
      LeagueFounderUserProfileImage.create(profileImage),
      LeagueFounderUserCreatedAt.create(createdAt),
      LeagueFounderUserUpdatedAt.create(updatedAt),
    );
  }

  public override get toPrimitives(): ILeagueFounderUserPrimitives {
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
  ): LeagueFounderUser {
    return new LeagueFounderUser(
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
  ): LeagueFounderUser {
    return new LeagueFounderUser(
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
  ): LeagueFounderUser {
    const defaultPassword = 'defaultPassword';

    return new LeagueFounderUser(
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
