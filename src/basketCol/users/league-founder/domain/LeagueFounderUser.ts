import { User } from '../../shared/domain/User';
import { ILeagueFounderUserPrimitives } from './ILeagueFounderUserPrimitives';
import { LeagueFounderUserAccountState } from './value-objects/LeagueFounderUserAccountState';
import { LeagueFounderUserBiography } from './value-objects/LeagueFounderUserBiography';
import { LeagueFounderUserCreatedAt } from './value-objects/LeagueFounderUserCreatedAt';
import { LeagueFounderUserEmail } from './value-objects/LeagueFounderUserEmail';
import { LeagueFounderUserId } from './value-objects/LeagueFounderUserId';
import { LeagueFounderUserName } from './value-objects/LeagueFounderUserName';
import { LeagueFounderUserPassword } from './value-objects/LeagueFounderUserPassword';
import { LeagueFounderUserSubscriptionType } from './value-objects/LeagueFounderUserSubscriptionType';
import { LeagueFounderUserType } from './value-objects/LeagueFounderUserType';
import { LeagueFounderUserUpdatedAt } from './value-objects/LeagueFounderUserUpdatedAt';

export class LeagueFounderUser extends User<ILeagueFounderUserPrimitives> {
  constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean; },
    password: string,
    accountState: string,
    subscriptionType: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      LeagueFounderUserId.create(id),
      LeagueFounderUserName.create(name),
      LeagueFounderUserBiography.create(biography),
      LeagueFounderUserEmail.create(email),
      LeagueFounderUserPassword.create(password),
      LeagueFounderUserType.create(),
      LeagueFounderUserAccountState.create(accountState),
      LeagueFounderUserSubscriptionType.create(subscriptionType),
      LeagueFounderUserCreatedAt.create(createdAt),
      LeagueFounderUserUpdatedAt.create(updatedAt),
    );
  }

  public override toPrimitives(): ILeagueFounderUserPrimitives {
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
    email: { value: string; verified: boolean; },
    password: string,
    accountState: string,
    subscriptionType: string,
    createdAt: string,
    updatedAt: string,
  ): LeagueFounderUser {
    return new LeagueFounderUser(
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
}
