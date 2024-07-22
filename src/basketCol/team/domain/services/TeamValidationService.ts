import { Nullable } from '../../../shared/domain/Nullable';
import { TeamNotFoundError } from '../exceptions/TeamNotFoundError';
import { TeamRepository } from '../repository/TeamRepository';
import { Team } from '../Team';
import { TeamId } from '../value-objects/TeamId';

export class TeamValidationService {
  readonly #teamRepository: TeamRepository;

  constructor(dependencies: {
    teamRepository: TeamRepository;
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
