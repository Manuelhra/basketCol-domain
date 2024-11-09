import { Nullable } from '../../../../../../shared/domain/Nullable';
import { DateNotWithinLeagueSeasonError } from '../../../../../shared/domain/exceptions/DateNotWithinLeagueSeasonError';
import { LeagueSeasonNotFoundError } from '../../../domain/exceptions/LeagueSeasonNotFoundError';
import { LeagueSeason } from '../../../domain/LeagueSeason';
import { ILeagueSeasonRepository } from '../../../domain/repository/ILeagueSeasonRepository';
import { LSFixtureDate } from '../value-objects/LSFixtureDate';
import { LSFixtureLeagueSeasonId } from '../value-objects/LSFixtureLeagueSeasonId';

type Dependencies = {
  leagueSeasonRepository: ILeagueSeasonRepository;
};

export class LeagueSeasonFixtureDateValidatorService {
  readonly #leagueSeasonRepository: ILeagueSeasonRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
  }

  public static create(dependencies: Dependencies): LeagueSeasonFixtureDateValidatorService {
    return new LeagueSeasonFixtureDateValidatorService(dependencies);
  }

  public async ensureDateWithinLeagueSeason(
    leagueSeasonId: LSFixtureLeagueSeasonId,
    date: LSFixtureDate,
  ): Promise<void> {
    const leagueSeasonFound: Nullable<LeagueSeason> = await this.#leagueSeasonRepository.searchById(leagueSeasonId.value);

    if (leagueSeasonFound === null || leagueSeasonFound === undefined) {
      throw LeagueSeasonNotFoundError.create(leagueSeasonId.value);
    }

    const { startDate, endDate } = leagueSeasonFound.toPrimitives;

    if (date.dateAsString < startDate || date.dateAsString > endDate) {
      throw DateNotWithinLeagueSeasonError.create(leagueSeasonId.value, date.dateAsString, startDate, endDate);
    }
  }
}
