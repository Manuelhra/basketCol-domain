import LeagueFounderUser from '../../../leagueFounderUser/domain/LeagueFounderUser';
import LeagueFounderUserNotFoundError from '../../../leagueFounderUser/domain/exceptions/LeagueFounderUserNotFoundError';
import { LeagueFounderUserRepository } from '../../../leagueFounderUser/domain/repository/LeagueFounderUserRepository';
import LeagueFounderUserId from '../../../leagueFounderUser/domain/value-objects/LeagueFounderUserId';
import { Nullable } from '../../../shared/domain/Nullable';

class LeagueFounderUserValidationService {
  readonly #leagueFounderUserRepository: LeagueFounderUserRepository;

  constructor(dependencies: {
    leagueFounderUserRepository: LeagueFounderUserRepository;
  }) {
    this.#leagueFounderUserRepository = dependencies.leagueFounderUserRepository;
  }

  public async ensureFounderUserExists(leagueFounderUserId: LeagueFounderUserId): Promise<void> {
    const leagueFounderUserFound: Nullable<LeagueFounderUser> = await this.#leagueFounderUserRepository.searchById(leagueFounderUserId);

    if (leagueFounderUserFound === undefined || leagueFounderUserFound === null) {
      throw new LeagueFounderUserNotFoundError(leagueFounderUserId);
    }
  }
}

export default LeagueFounderUserValidationService;
