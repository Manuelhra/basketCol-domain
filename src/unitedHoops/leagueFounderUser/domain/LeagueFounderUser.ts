import User from '../../shared/domain/User';
import { PlainLeagueFounderUserData } from './PlainLeagueFounderUserData';
import LeagueFounderUserActive from './value-objects/LeagueFounderUserActive';
import LeagueFounderUserBiography from './value-objects/LeagueFounderUserBiography';
import LeagueFounderUserEmail from './value-objects/LeagueFounderUserEmail';
import LeagueFounderUserId from './value-objects/LeagueFounderUserId';
import LeagueFounderUserName from './value-objects/LeagueFounderUserName';
import LeagueFounderUserPassword from './value-objects/LeagueFounderUserPassword';
import LeagueFounderUserType from './value-objects/LeagueFounderUserType';

class LeagueFounderUser extends User {
  readonly #name: LeagueFounderUserName;

  readonly #biography: LeagueFounderUserBiography;

  constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean; },
    password: string,
    type: string,
    active: boolean,
  ) {
    super(
      new LeagueFounderUserId(id, 'id'),
      new LeagueFounderUserEmail(email),
      new LeagueFounderUserPassword(password),
      new LeagueFounderUserType(type),
      new LeagueFounderUserActive(active),
    );

    this.#name = new LeagueFounderUserName(name);
    this.#biography = new LeagueFounderUserBiography(biography);
  }

  public toPrimitives(): PlainLeagueFounderUserData {
    return {
      id: this.id.getValue(),
      name: this.#name.getValue(),
      biography: this.#biography.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
      type: this.type.getValue(),
      active: this.active.getValue(),
    };
  }
}

export default LeagueFounderUser;
