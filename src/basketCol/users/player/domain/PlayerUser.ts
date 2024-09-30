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

export class PlayerUser extends User<IPlayerUserPrimitives> {
  readonly #nickname: PlayerUserNickname;

  private constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    nickname: string,
    email: { value: string; verified: boolean },
    password: string,
    accountState: string,
    subscriptionType: string,
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
      PlayerUserType.create(),
      PlayerUserAccountState.create(accountState),
      PlayerUserSubscriptionType.create(subscriptionType),
      PlayerUserCreatedAt.create(createdAt),
      PlayerUserUpdatedAt.create(updatedAt),
    );

    this.#nickname = PlayerUserNickname.create(nickname);
  }

  public get nickname(): string {
    return this.#nickname.value;
  }

  public override toPrimitives(): IPlayerUserPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      biography: this.biography.value,
      nickname: this.#nickname.value,
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
    nickname: string,
    email: { value: string; verified: boolean },
    password: string,
    accountState: string,
    subscriptionType: string,
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
    nickname: string,
    email: { value: string; verified: boolean },
    accountState: string,
    subscriptionType: string,
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
      accountState,
      subscriptionType,
      createdAt,
      updatedAt,
      { skipPasswordValidation: true },
    );
  }
}
