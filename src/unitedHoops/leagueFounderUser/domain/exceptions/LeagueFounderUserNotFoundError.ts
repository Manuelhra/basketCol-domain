import RootError from '../../../shared/domain/exceptions/RootError';
import LeagueFounderUserId from '../value-objects/LeagueFounderUserId';

class LeagueFounderUserNotFoundError extends RootError {
  constructor(leagueFounderUserId: LeagueFounderUserId) {
    const founderUserId: string = leagueFounderUserId.getValue();
    super(`LeagueFounderUser not found: The user with ID '${founderUserId}' does not exist in the system.`);

    this.name = 'LeagueFounderUserNotFoundError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default LeagueFounderUserNotFoundError;
