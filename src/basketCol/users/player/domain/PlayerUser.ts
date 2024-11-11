import { User } from '../../shared/domain/User';
import { IPlayerUserPrimitives } from './IPlayerUserPrimitives';
import { PlayerUserNickname } from './value-objects/PlayerUserNickname';
import { PlayerUserBiography } from './value-objects/PlayerUserBiography';
import { PlayerUserCreatedAt } from './value-objects/PlayerUserCreatedAt';
import { PlayerUserEmail } from './value-objects/PlayerUserEmail';
import { PlayerUserId } from './value-objects/PlayerUserId';
import { PlayerUserName } from './value-objects/PlayerUserName';
import { PlayerUserPassword } from './value-objects/PlayerUserPassword';
import { PlayerUserType } from './value-objects/PlayerUserType';
import { PlayerUserUpdatedAt } from './value-objects/PlayerUserUpdatedAt';
import { PlayerUserAccountState } from './value-objects/PlayerUserAccountState';
import { PlayerUserSubscriptionType } from './value-objects/PlayerUserSubscriptionType';
import { PlayerUserProfileImage } from './value-objects/PlayerUserProfileImage';
import { IImageValueObjectProps } from '../../../shared/domain/value-objects/ImageValueObject';
import { PlayerUserGender } from './value-objects/PlayerUserGender';

export class PlayerUser extends User<IPlayerUserPrimitives> {
  readonly #nickname: PlayerUserNickname;

  private constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    nickname: string,
    email: { value: string; verified: boolean },
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
      PlayerUserId.create(id),
      PlayerUserName.create(name),
      PlayerUserBiography.create(biography),
      PlayerUserEmail.create(email),
      PlayerUserPassword.create(password, options && options.skipPasswordValidation),
      PlayerUserGender.create(gender),
      PlayerUserType.create(),
      PlayerUserAccountState.create(accountState),
      PlayerUserSubscriptionType.create(subscriptionType),
      PlayerUserProfileImage.create(profileImage),
      PlayerUserCreatedAt.create(createdAt),
      PlayerUserUpdatedAt.create(updatedAt),
    );

    this.#nickname = PlayerUserNickname.create(nickname);
  }

  public get nickname(): PlayerUserNickname {
    return this.#nickname;
  }

  public override get toPrimitives(): IPlayerUserPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      biography: this.biography.value,
      nickname: this.#nickname.value,
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
    nickname: string,
    email: { value: string; verified: boolean },
    password: string,
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
    createdAt: string,
    updatedAt: string,
  ): PlayerUser {
    return new PlayerUser(
      id,
      name,
      biography,
      nickname,
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
    nickname: string,
    email: { value: string; verified: boolean },
    password: string,
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
    createdAt: string,
    updatedAt: string,
  ): PlayerUser {
    return new PlayerUser(
      id,
      name,
      biography,
      nickname,
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
    nickname: string,
    email: { value: string; verified: boolean },
    gender: string,
    accountState: string,
    subscriptionType: string,
    profileImage: IImageValueObjectProps,
    createdAt: string,
    updatedAt: string,
  ): PlayerUser {
    const defaultPassword = 'defaultPassword';

    return new PlayerUser(
      id,
      name,
      biography,
      nickname,
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
