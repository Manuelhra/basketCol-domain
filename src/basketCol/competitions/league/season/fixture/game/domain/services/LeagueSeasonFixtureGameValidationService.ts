import { Nullable } from '../../../../../../../shared/domain/Nullable';
import { LeagueSeasonFixtureGameNotFoundError } from '../exceptions/LeagueSeasonFixtureGameNotFoundError';
import { LeagueSeasonFixtureGame } from '../LeagueSeasonFixtureGame';
import { ILeagueSeasonFixtureGameRepository } from '../repository/ILeagueSeasonFixtureGameRepository';
import { LSFGameId } from '../value-objects/LSFGameId';

type Dependencies = {
  readonly leagueSeasonFixtureGameRepository: ILeagueSeasonFixtureGameRepository;
};

export class LeagueSeasonFixtureGameValidationService {
  readonly #leagueSeasonFixtureGameRepository: ILeagueSeasonFixtureGameRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueSeasonFixtureGameRepository = dependencies.leagueSeasonFixtureGameRepository;
  }

  public static create(dependencies: Dependencies): LeagueSeasonFixtureGameValidationService {
    return new LeagueSeasonFixtureGameValidationService(dependencies);
  }

  public async ensureLeagueSeasonFixtureGameExists(leagueSeasonFixtureGameId: LSFGameId): Promise<void> {
    const leagueSeasonFixtureGameFound: Nullable<LeagueSeasonFixtureGame> = await this.#leagueSeasonFixtureGameRepository.findById(leagueSeasonFixtureGameId);

    if (leagueSeasonFixtureGameFound === undefined || leagueSeasonFixtureGameFound === null) {
      throw LeagueSeasonFixtureGameNotFoundError.create(leagueSeasonFixtureGameId);
    }
  }
}
