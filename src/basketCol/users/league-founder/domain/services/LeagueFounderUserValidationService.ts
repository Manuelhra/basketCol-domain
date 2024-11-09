import { Nullable } from '../../../../shared/domain/Nullable';
import { LeagueFounderUser } from '../LeagueFounderUser';
import { LeagueFounderUserNotFoundError } from '../exceptions/LeagueFounderUserNotFoundError';
import { ILeagueFounderUserRepository } from '../repository/ILeagueFounderUserRepository';
import { LeagueFounderUserId } from '../value-objects/LeagueFounderUserId';

type Dependencies = {
  readonly leagueFounderUserRepository: ILeagueFounderUserRepository;
};

export class LeagueFounderUserValidationService {
  readonly #leagueFounderUserRepository: ILeagueFounderUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueFounderUserRepository = dependencies.leagueFounderUserRepository;
  }

  public static create(dependencies: Dependencies): LeagueFounderUserValidationService {
    return new LeagueFounderUserValidationService(dependencies);
  }

  public async ensureFounderUserExists(leagueFounderUserId: LeagueFounderUserId): Promise<void> {
    const leagueFounderUserFound: Nullable<LeagueFounderUser> = await this.#leagueFounderUserRepository.findById(leagueFounderUserId);

    if (leagueFounderUserFound === undefined || leagueFounderUserFound === null) {
      throw LeagueFounderUserNotFoundError.create(leagueFounderUserId);
    }
  }
}
