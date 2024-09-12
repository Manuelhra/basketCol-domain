import { User } from '../../shared/domain/User';
import { ILeagueFounderUser } from './ILeagueFounderUser';
import { LeagueFounderUserActive } from './value-objects/LeagueFounderUserActive';
import { LeagueFounderUserBiography } from './value-objects/LeagueFounderUserBiography';
import { LeagueFounderUserCreatedAt } from './value-objects/LeagueFounderUserCreatedAt';
import { LeagueFounderUserEmail } from './value-objects/LeagueFounderUserEmail';
import { LeagueFounderUserId } from './value-objects/LeagueFounderUserId';
import { LeagueFounderUserName } from './value-objects/LeagueFounderUserName';
import { LeagueFounderUserPassword } from './value-objects/LeagueFounderUserPassword';
import { LeagueFounderUserType } from './value-objects/LeagueFounderUserType';
import { LeagueFounderUserUpdatedAt } from './value-objects/LeagueFounderUserUpdatedAt';

export class LeagueFounderUser extends User<ILeagueFounderUser> {
  constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean; },
    password: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new LeagueFounderUserId(id),
      new LeagueFounderUserName(name),
      new LeagueFounderUserBiography(biography),
      new LeagueFounderUserEmail(email),
      new LeagueFounderUserPassword(password),
      new LeagueFounderUserType(),
      new LeagueFounderUserActive(active),
      new LeagueFounderUserCreatedAt(createdAt),
      new LeagueFounderUserUpdatedAt(updatedAt),
    );
  }

  public override toPrimitives(): ILeagueFounderUser {
    return {
      id: this.id.value,
      name: this.name.value,
      biography: this.biography.value,
      email: this.email.value,
      password: this.password.value,
      type: this.type.value,
      active: this.active.value,
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
    active: boolean,
    createdAt: string,
    updatedAt: string,
  ): LeagueFounderUser {
    return new LeagueFounderUser(
      id,
      name,
      biography,
      email,
      password,
      active,
      createdAt,
      updatedAt,
    );
  }
}
