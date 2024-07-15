import User from '../../shared/domain/User';
import { ILeagueFounderUser } from './ILeagueFounderUser';
import LeagueFounderUserActive from './value-objects/LeagueFounderUserActive';
import LeagueFounderUserBiography from './value-objects/LeagueFounderUserBiography';
import LeagueFounderUserCreatedAt from './value-objects/LeagueFounderUserCreatedAt';
import LeagueFounderUserEmail from './value-objects/LeagueFounderUserEmail';
import LeagueFounderUserId from './value-objects/LeagueFounderUserId';
import LeagueFounderUserName from './value-objects/LeagueFounderUserName';
import LeagueFounderUserPassword from './value-objects/LeagueFounderUserPassword';
import LeagueFounderUserType from './value-objects/LeagueFounderUserType';
import LeagueFounderUserUpdatedAt from './value-objects/LeagueFounderUserUpdatedAt';

class LeagueFounderUser extends User {
  readonly #name: LeagueFounderUserName;

  readonly #biography: LeagueFounderUserBiography;

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
      new LeagueFounderUserEmail(email),
      new LeagueFounderUserPassword(password),
      new LeagueFounderUserType(),
      new LeagueFounderUserActive(active),
      new LeagueFounderUserCreatedAt(createdAt),
      new LeagueFounderUserUpdatedAt(updatedAt),
    );

    this.#name = new LeagueFounderUserName(name);
    this.#biography = new LeagueFounderUserBiography(biography);
  }

  public toPrimitives(): ILeagueFounderUser {
    return {
      id: this.id.getValue(),
      name: this.#name.getValue(),
      biography: this.#biography.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
      type: this.type.getValue(),
      active: this.active.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}

export default LeagueFounderUser;
