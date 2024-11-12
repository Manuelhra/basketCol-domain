import { LeagueSeasonNotFoundError } from '../exceptions/LeagueSeasonNotFoundError';
import { ILeagueSeasonRepository } from '../repository/ILeagueSeasonRepository';
import { LeagueSeasonId } from '../value-objects/LeagueSeasonId';

type Dependencies = {
  readonly leagueSeasonRepository: ILeagueSeasonRepository;
};

export class LeagueSeasonValidationDomainService {
  readonly #leagueSeasonRepository: ILeagueSeasonRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
  }

  public static create(dependencies: Dependencies): LeagueSeasonValidationDomainService {
    return new LeagueSeasonValidationDomainService(dependencies);
  }

  public async ensureLeagueSeasonExists(leagueSeasonId: LeagueSeasonId): Promise<void> {
    const leagueSeasonFound = await this.#leagueSeasonRepository.findById(leagueSeasonId);

    if (leagueSeasonFound === undefined || leagueSeasonFound === null) {
      throw LeagueSeasonNotFoundError.create(leagueSeasonId);
    }
  }
}
