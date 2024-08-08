import { Nullable } from '../../../../shared/domain/Nullable';
import { LeagueFounderUser } from '../LeagueFounderUser';
import { LeagueFounderUserNotFoundError } from '../exceptions/LeagueFounderUserNotFoundError';
import { ILeagueFounderUserRepository } from '../repository/ILeagueFounderUserRepository';
import { LeagueFounderUserId } from '../value-objects/LeagueFounderUserId';

export class LeagueFounderUserValidationService {
  readonly #leagueFounderUserRepository: ILeagueFounderUserRepository;

  constructor(dependencies: {
    leagueFounderUserRepository: ILeagueFounderUserRepository;
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
