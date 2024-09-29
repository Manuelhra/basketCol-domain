import { Nullable } from '../../../shared/domain/Nullable';
import { TeamNotFoundError } from '../exceptions/TeamNotFoundError';
import { ITeamRepository } from '../repository/ITeamRepository';
import { Team } from '../Team';
import { TeamId } from '../value-objects/TeamId';

type Dependencies = {
  teamRepository: ITeamRepository;
};

export class TeamValidationService {
  readonly #teamRepository: ITeamRepository;

  private constructor(dependencies: Dependencies) {
    this.#teamRepository = dependencies.teamRepository;
  }

  public static create(dependencies: Dependencies): TeamValidationService {
    return new TeamValidationService(dependencies);
  }

  public async ensureTeamExists(teamId: TeamId): Promise<void> {
    const teamFound: Nullable<Team> = await this.#teamRepository.searchById(teamId);

    if (teamFound === undefined || teamFound === null) {
      throw TeamNotFoundError.create(teamId);
    }
  }
}
