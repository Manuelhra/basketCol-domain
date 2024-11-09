import { Nullable } from '../../../../../../shared/domain/Nullable';
import { FixtureAlreadyExistsForDateInLeagueSeasonError } from '../exceptions/FixtureAlreadyExistsForDateInLeagueSeasonError';
import { LeagueSeasonFixture } from '../LeagueSeasonFixture';
import { ILeagueSeasonFixtureRepository } from '../repository/ILeagueSeasonFixtureRepository';
import { LSFixtureDate } from '../value-objects/LSFixtureDate';
import { LSFixtureLeagueSeasonId } from '../value-objects/LSFixtureLeagueSeasonId';

type Dependencies = {
  leagueSeasonFixtureRepository: ILeagueSeasonFixtureRepository;
};

export class LeagueSeasonFixtureValidationService {
  readonly #leagueSeasonFixtureRepository: ILeagueSeasonFixtureRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueSeasonFixtureRepository = dependencies.leagueSeasonFixtureRepository;
  }

  public static create(dependencies: Dependencies): LeagueSeasonFixtureValidationService {
    return new LeagueSeasonFixtureValidationService(dependencies);
  }

  public async ensureNoFixtureExistsForDateAndLeagueSeason(
    leagueSeasonId: LSFixtureLeagueSeasonId,
    date: LSFixtureDate,
  ): Promise<void> {
    const leagueSeasonFixtureFound: Nullable<LeagueSeasonFixture> = await this.#leagueSeasonFixtureRepository.searchByLeagueSeasonIdAndDate(leagueSeasonId, date);

    if (leagueSeasonFixtureFound !== null && leagueSeasonFixtureFound !== undefined) {
      throw FixtureAlreadyExistsForDateInLeagueSeasonError.create(leagueSeasonId.leagueSeasonIdAsString, date.dateAsString);
    }
  }
}
