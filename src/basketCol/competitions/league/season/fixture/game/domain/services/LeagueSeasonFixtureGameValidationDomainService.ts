import { Nullable } from '../../../../../../../shared/domain/Nullable';
import { LeagueSeasonFixtureGameNotFoundError } from '../exceptions/LeagueSeasonFixtureGameNotFoundError';
import { LeagueSeasonFixtureGame } from '../LeagueSeasonFixtureGame';
import { ILeagueSeasonFixtureGameRepository } from '../repository/ILeagueSeasonFixtureGameRepository';
import { LSFGameId } from '../value-objects/LSFGameId';

type Dependencies = {
  readonly leagueSeasonFixtureGameRepository: ILeagueSeasonFixtureGameRepository;
};

export class LeagueSeasonFixtureGameValidationDomainService {
  readonly #leagueSeasonFixtureGameRepository: ILeagueSeasonFixtureGameRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueSeasonFixtureGameRepository = dependencies.leagueSeasonFixtureGameRepository;
  }

  public static create(dependencies: Dependencies): LeagueSeasonFixtureGameValidationDomainService {
    return new LeagueSeasonFixtureGameValidationDomainService(dependencies);
  }

  public async ensureLeagueSeasonFixtureGameExists(leagueSeasonFixtureGameId: LSFGameId): Promise<LeagueSeasonFixtureGame> {
    const leagueSeasonFixtureGameFound: Nullable<LeagueSeasonFixtureGame> = await this.#leagueSeasonFixtureGameRepository.findById(leagueSeasonFixtureGameId);

    if (leagueSeasonFixtureGameFound === undefined || leagueSeasonFixtureGameFound === null) {
      throw LeagueSeasonFixtureGameNotFoundError.create(leagueSeasonFixtureGameId);
    }

    return leagueSeasonFixtureGameFound;
  }
}
