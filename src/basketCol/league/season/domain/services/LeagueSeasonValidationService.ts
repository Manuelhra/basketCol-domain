import { LeagueSeasonNotFoundError } from '../exceptions/LeagueSeasonNotFoundError';
import { LeagueSeasonRepository } from '../repository/LeagueSeasonRepository';
import { LeagueSeasonId } from '../value-objects/LeagueSeasonId';

export class LeagueSeasonValidationService {
  readonly #leagueSeasonRepository: LeagueSeasonRepository;

  constructor(dependencies: {
    leagueSeasonRepository: LeagueSeasonRepository;
  }) {
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
  }

  public async ensureLeagueSeasonExists(leagueSeasonId: LeagueSeasonId): Promise<void> {
    const leagueSeasonFound = await this.#leagueSeasonRepository.searchById(leagueSeasonId);

    if (leagueSeasonFound === undefined || leagueSeasonFound === null) {
      throw new LeagueSeasonNotFoundError(leagueSeasonId);
    }
  }
}
