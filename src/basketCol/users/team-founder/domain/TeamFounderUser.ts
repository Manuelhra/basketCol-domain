import { User } from '../../shared/domain/User';
import { ITeamFounderUser } from './ITeamFounderUser';
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

export class TeamFounderUser extends User<ITeamFounderUser> {
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
      new TeamFounderUserId(id),
      new TeamFounderUserName(name),
      new TeamFounderUserBiography(biography),
      new TeamFounderUserEmail(email),
      new TeamFounderUserPassword(password),
      new TeamFounderUserType(),
      new TeamFounderUserAccountState(accountState),
      new TeamFounderUserSubscriptionType(subscriptionType),
      new TeamFounderUserCreatedAt(createdAt),
      new TeamFounderUserUpdatedAt(updatedAt),
    );
  }

  public override toPrimitives(): ITeamFounderUser {
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
  ): TeamFounderUser {
    return new TeamFounderUser(
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
