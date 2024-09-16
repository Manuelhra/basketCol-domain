import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamFounderUserNotFoundError } from '../exceptions/TeamFounderUserNotFoundError';
import { ITeamFounderUserRepository } from '../repository/ITeamFounderUserRepository';
import { TeamFounderUser } from '../TeamFounderUser';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

export class TeamFounderUserValidationService {
  readonly #tFURepository: ITeamFounderUserRepository;

  constructor(dependencies: {
    tFURepository: ITeamFounderUserRepository;
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
