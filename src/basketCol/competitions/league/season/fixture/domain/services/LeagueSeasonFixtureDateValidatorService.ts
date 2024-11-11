import { Nullable } from '../../../../../../shared/domain/Nullable';
import { DateNotWithinLeagueSeasonError } from '../../../../../shared/domain/exceptions/DateNotWithinLeagueSeasonError';
import { LeagueSeasonNotFoundError } from '../../../domain/exceptions/LeagueSeasonNotFoundError';
import { LeagueSeason } from '../../../domain/LeagueSeason';
import { ILeagueSeasonRepository } from '../../../domain/repository/ILeagueSeasonRepository';
import { LSFixtureDate } from '../value-objects/LSFixtureDate';
import { LSFixtureLeagueSeasonId } from '../value-objects/LSFixtureLeagueSeasonId';

type Dependencies = {
  readonly leagueSeasonRepository: ILeagueSeasonRepository;
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
    const leagueSeasonFound: Nullable<LeagueSeason> = await this.#leagueSeasonRepository.findById(leagueSeasonId);

    if (leagueSeasonFound === null || leagueSeasonFound === undefined) {
      throw LeagueSeasonNotFoundError.create(leagueSeasonId);
    }

    const { startDate, endDate } = leagueSeasonFound.toPrimitives;

    const dateToValidate = new Date(date.dateAsString);
    const seasonStartDate = new Date(startDate);
    const seasonEndDate = new Date(endDate);

    if (dateToValidate < seasonStartDate || dateToValidate > seasonEndDate) {
      throw DateNotWithinLeagueSeasonError.create(leagueSeasonId, date.dateAsString, startDate, endDate);
    }
  }
}
