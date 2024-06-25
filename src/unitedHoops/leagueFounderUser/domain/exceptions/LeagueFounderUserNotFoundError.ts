import LeagueFounderUserId from '../value-objects/LeagueFounderUserId';

class LeagueFounderUserNotFoundError extends Error {
  constructor(leagueFounderUserId: LeagueFounderUserId) {
    const founderUserId: string = leagueFounderUserId.getValue();
    super(`LeagueFounderUser not found: The user with ID '${founderUserId}' does not exist in the system.`);

    this.name = 'LeagueFounderUserNotFoundError';
  }
}

export default LeagueFounderUserNotFoundError;
