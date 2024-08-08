import { Nullable } from '../../../../../../shared/domain/Nullable';
import { FixtureAlreadyExistsForDateInLeagueSeasonError } from '../exceptions/FixtureAlreadyExistsForDateInLeagueSeasonError';
import { LeagueSeasonFixture } from '../LeagueSeasonFixture';
import { ILeagueSeasonFixtureRepository } from '../repository/ILeagueSeasonFixtureRepository';
import { LSFixtureDate } from '../value-objects/LSFixtureDate';
import { LSFixtureLeagueSeasonId } from '../value-objects/LSFixtureLeagueSeasonId';

export class LeagueSeasonFixtureValidationService {
  readonly #leagueSeasonFixtureRepository: ILeagueSeasonFixtureRepository;

  constructor(leagueSeasonFixtureRepository: ILeagueSeasonFixtureRepository) {
    this.#leagueSeasonFixtureRepository = leagueSeasonFixtureRepository;
  }

  public async ensureNoFixtureExistsForDateAndLeagueSeason(
    leagueSeasonId: LSFixtureLeagueSeasonId,
    date: LSFixtureDate,
  ): Promise<void> {
    const leagueSeasonFixtureFound: Nullable<LeagueSeasonFixture> = await this.#leagueSeasonFixtureRepository.findByLeagueSeasonIdAndDate(leagueSeasonId, date);

    if (leagueSeasonFixtureFound !== null && leagueSeasonFixtureFound !== undefined) {
      throw new FixtureAlreadyExistsForDateInLeagueSeasonError(leagueSeasonId.leagueSeasonIdAsString, date.dateAsString);
    }
  }
}
