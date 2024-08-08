import { Nullable } from '../../../shared/domain/Nullable';
import { TeamNotFoundError } from '../exceptions/TeamNotFoundError';
import { ITeamRepository } from '../repository/ITeamRepository';
import { Team } from '../Team';
import { TeamId } from '../value-objects/TeamId';

export class TeamValidationService {
  readonly #teamRepository: ITeamRepository;

  constructor(dependencies: {
    teamRepository: ITeamRepository;
  }) {
    this.#teamRepository = dependencies.teamRepository;
  }

  public async ensureTeamExists(teamId: TeamId): Promise<void> {
    const teamFound: Nullable<Team> = await this.#teamRepository.searchById(teamId);

    if (teamFound === undefined || teamFound === null) {
      throw new TeamNotFoundError(teamId);
    }
  }
}
