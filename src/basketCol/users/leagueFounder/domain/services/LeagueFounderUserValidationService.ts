import { Nullable } from '../../../../shared/domain/Nullable';
import LeagueFounderUser from '../LeagueFounderUser';
import LeagueFounderUserNotFoundError from '../exceptions/LeagueFounderUserNotFoundError';
import { LeagueFounderUserRepository } from '../repository/LeagueFounderUserRepository';
import LeagueFounderUserId from '../value-objects/LeagueFounderUserId';

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
