import { User } from '../../shared/domain/User';
import { IPlayerUser } from './IPlayerUser';
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

export class PlayerUser extends User<IPlayerUser> {
  readonly #nickname: PlayerUserNickname;

  constructor(
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
  ) {
    super(
      new PlayerUserId(id),
      new PlayerUserName(name),
      new PlayerUserBiography(biography),
      new PlayerUserEmail(email),
      new PlayerUserPassword(password),
      new PlayerUserType(),
      new PlayerUserAccountState(accountState),
      new PlayerUserSubscriptionType(subscriptionType),
      new PlayerUserCreatedAt(createdAt),
      new PlayerUserUpdatedAt(updatedAt),
    );

    this.#nickname = new PlayerUserNickname(nickname);
  }

  public override toPrimitives(): IPlayerUser {
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
}
