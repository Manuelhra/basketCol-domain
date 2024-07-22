import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamFounderUserNotFoundError } from '../exceptions/TeamFounderUserNotFoundError';
import { TFURepository } from '../repository/TFURepository';
import { TeamFounderUser } from '../TeamFounderUser';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

export class TFUValidationService {
  readonly #tFURepository: TFURepository;

  constructor(dependencies: {
    tFURepository: TFURepository;
  }) {
    this.#tFURepository = dependencies.tFURepository;
  }

  public async ensureTeamFounderUserExists(teamFounderUserId: TeamFounderUserId): Promise<void> {
    const teamFounderUserFound: Nullable<TeamFounderUser> = await this.#tFURepository.searchById(teamFounderUserId);

    if (teamFounderUserFound === undefined || teamFounderUserFound === null) {
      throw new TeamFounderUserNotFoundError(teamFounderUserId);
    }
  }
}
