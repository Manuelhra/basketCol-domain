import { Nullable } from '../../../shared/domain/Nullable';
import { TeamNotFoundError } from '../exceptions/TeamNotFoundError';
import { ITeamRepository } from '../repository/ITeamRepository';
import { Team } from '../Team';
import { TeamId } from '../value-objects/TeamId';

type Dependencies = {
  teamRepository: ITeamRepository;
};

export class TeamValidationDomainService {
  readonly #teamRepository: ITeamRepository;

  private constructor(dependencies: Dependencies) {
    this.#teamRepository = dependencies.teamRepository;
  }

  public static create(dependencies: Dependencies): TeamValidationDomainService {
    return new TeamValidationDomainService(dependencies);
  }

  public async ensureTeamExists(teamId: TeamId): Promise<void> {
    const teamFound: Nullable<Team> = await this.#teamRepository.findById(teamId);

    if (teamFound === undefined || teamFound === null) {
      throw TeamNotFoundError.create(teamId);
    }
  }
}
