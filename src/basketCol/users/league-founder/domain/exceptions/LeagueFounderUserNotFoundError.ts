import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { LeagueFounderUserId } from '../value-objects/LeagueFounderUserId';

export class LeagueFounderUserNotFoundError extends RootError {
  private constructor(leagueFounderUserId: LeagueFounderUserId) {
    super(`LeagueFounderUser not found: The user with ID '${leagueFounderUserId.value}' does not exist in the system.`);

    this.name = 'LeagueFounderUserNotFoundError';
  }

  public static create(leagueFounderUserId: LeagueFounderUserId): LeagueFounderUserNotFoundError {
    return new LeagueFounderUserNotFoundError(leagueFounderUserId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
