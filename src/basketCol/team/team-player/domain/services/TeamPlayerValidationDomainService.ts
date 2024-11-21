import { TeamPlayerAlreadyRegisteredError } from '../exceptions/TeamPlayerAlreadyRegisteredError';
import { ITeamPlayerRepository } from '../repository/ITeamPlayerRepository';
import { TeamPlayerPlayerUserId } from '../value-objects/TeamPlayerPlayerUserId';
import { TeamPlayerTeamId } from '../value-objects/TeamPlayerTeamId';

type Dependencies = {
  readonly teamPlayerRepository: ITeamPlayerRepository;
};

export class TeamPlayerValidationDomainService {
  private constructor(private readonly dependencies: Dependencies) {}

  public static create(dependencies: Dependencies): TeamPlayerValidationDomainService {
    return new TeamPlayerValidationDomainService(dependencies);
  }

  public async ensurePlayerIsRegistered(playerUserId: TeamPlayerPlayerUserId, teamId: TeamPlayerTeamId): Promise<void> {
    const teamPlayerFound = await this.dependencies.teamPlayerRepository.findByTeamIdAndPlayerUserId(teamId, playerUserId);

    if (teamPlayerFound !== undefined && teamPlayerFound !== null) {
      throw TeamPlayerAlreadyRegisteredError.create(playerUserId, teamId);
    }
  }
}
