import { LeagueSeasonNotFoundError } from '../exceptions/LeagueSeasonNotFoundError';
import { ILeagueSeasonRepository } from '../repository/ILeagueSeasonRepository';
import { LeagueSeasonId } from '../value-objects/LeagueSeasonId';

export class LeagueSeasonValidationService {
  readonly #leagueSeasonRepository: ILeagueSeasonRepository;

  constructor(dependencies: {
    leagueSeasonRepository: ILeagueSeasonRepository;
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
