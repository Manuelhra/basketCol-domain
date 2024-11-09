import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamFounderUserNotFoundError } from '../exceptions/TeamFounderUserNotFoundError';
import { ITeamFounderUserRepository } from '../repository/ITeamFounderUserRepository';
import { TeamFounderUser } from '../TeamFounderUser';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

type Dependencies = {
  readonly tFURepository: ITeamFounderUserRepository;
};

export class TeamFounderUserValidationService {
  readonly #tFURepository: ITeamFounderUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#tFURepository = dependencies.tFURepository;
  }

  public static create(dependencies: Dependencies): TeamFounderUserValidationService {
    return new TeamFounderUserValidationService(dependencies);
  }

  public async ensureTeamFounderUserExists(teamFounderUserId: TeamFounderUserId): Promise<void> {
    const teamFounderUserFound: Nullable<TeamFounderUser> = await this.#tFURepository.findById(teamFounderUserId);

    if (teamFounderUserFound === undefined || teamFounderUserFound === null) {
      throw TeamFounderUserNotFoundError.create(teamFounderUserId);
    }
  }
}
