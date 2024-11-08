import { Nullable } from '../../../../shared/domain/Nullable';
import { LeagueSeasonNotFoundError } from '../../../league/season/domain/exceptions/LeagueSeasonNotFoundError';
import { LeagueSeason } from '../../../league/season/domain/LeagueSeason';
import { ILeagueSeasonRepository } from '../../../league/season/domain/repository/ILeagueSeasonRepository';
import { LeagueSeasonId } from '../../../league/season/domain/value-objects/LeagueSeasonId';
import { DateNotWithinLeagueSeasonError } from '../exceptions/DateNotWithinLeagueSeasonError';
import { FixtureDate } from '../value-objects/FixtureDate';

type Dependencies = {
  leagueSeasonRepository: ILeagueSeasonRepository;
};

export class FixtureDateValidatorService {
  readonly #leagueSeasonRepository: ILeagueSeasonRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
  }

  public static create(dependencies: Dependencies): FixtureDateValidatorService {
    return new FixtureDateValidatorService(dependencies);
  }

  public async ensureDateWithinLeagueSeason<Date extends FixtureDate>(
    leagueSeasonId: LeagueSeasonId,
    date: Date,
  ): Promise<void> {
    const leagueSeasonFound: Nullable<LeagueSeason> = await this.#leagueSeasonRepository.searchById(leagueSeasonId);

    if (leagueSeasonFound === null || leagueSeasonFound === undefined) {
      throw LeagueSeasonNotFoundError.create(leagueSeasonId);
    }

    const { startDate, endDate } = leagueSeasonFound.toPrimitives;

    if (date.dateAsString < startDate || date.dateAsString > endDate) {
      throw DateNotWithinLeagueSeasonError.create(leagueSeasonId, date.dateAsString);
    }
  }
}
