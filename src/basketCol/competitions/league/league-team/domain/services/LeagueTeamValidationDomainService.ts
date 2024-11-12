import { Nullable } from '../../../../../shared/domain/Nullable';
import { LeagueTeamAlreadyRegisteredError } from '../exceptions/LeagueTeamAlreadyRegisteredError';
import { LeagueTeam } from '../LeagueTeam';
import { ILeagueTeamRepository } from '../repository/ILeagueTeamRepository';
import { LeagueTeamLeagueId } from '../value-objects/LeagueTeamLeagueId';
import { LeagueTeamTeamId } from '../value-objects/LeagueTeamTeamId';

type Dependencies = {
  readonly leagueTeamRepository: ILeagueTeamRepository;
};

export class LeagueTeamValidationDomainService {
  private constructor(private readonly dependencies: Dependencies) {}

  public static create(dependencies: Dependencies): LeagueTeamValidationDomainService {
    return new LeagueTeamValidationDomainService(dependencies);
  }

  public async ensureTeamIsRegistered(leagueId: LeagueTeamLeagueId, teamId: LeagueTeamTeamId): Promise<void> {
    const leagueTeamFound: Nullable<LeagueTeam> = await this.dependencies.leagueTeamRepository.findByLeagueIdAndTeamId(leagueId, teamId);

    if (leagueTeamFound === undefined || leagueTeamFound === null) {
      throw LeagueTeamAlreadyRegisteredError.create(leagueId, teamId);
    }
  }
}
