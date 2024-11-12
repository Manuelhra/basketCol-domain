import { RootError } from '../../../../../shared/domain/exceptions/RootError';
import { TeamId } from '../../../../../team/domain/value-objects/TeamId';
import { LeagueId } from '../../../domain/value-objects/LeagueId';

export class LeagueTeamAlreadyRegisteredError extends RootError {
  private constructor(leagueId: LeagueId, teamId: TeamId) {
    const leagueIdValue: string = leagueId.value;
    const teamIdValue: string = teamId.value;
    super(`Team already registered: The team with ID '${teamIdValue}' is already registered in the league with ID '${leagueIdValue}'.`);

    this.name = 'LeagueTeamAlreadyRegisteredError';
  }

  public static create(leagueId: LeagueId, teamId: TeamId): LeagueTeamAlreadyRegisteredError {
    return new LeagueTeamAlreadyRegisteredError(leagueId, teamId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
