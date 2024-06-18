import { Nullable } from '../../../shared/domain/Nullable';
import League from '../League';
import DuplicateLeagueNameError from '../exceptions/DuplicateLeagueNameError';
import { LeagueRepository } from '../repository/LeagueRepository';

class LeagueValidationNameService {
  readonly #leagueRepository: LeagueRepository;

  constructor(dependencies: {
    leagueRepository: LeagueRepository
  }) {
    this.#leagueRepository = dependencies.leagueRepository;
  }

  public async ensureIsValidShortName(shortName: string): Promise<void> {
    const league: Nullable<League> = await this.#leagueRepository.searchByShortName(shortName);

    if (league) {
      throw new DuplicateLeagueNameError(shortName, 'SHORT_NAME');
    }
  }

  public async ensureIsValidOfficialName(officialName: string): Promise<void> {
    const league: Nullable<League> = await this.#leagueRepository.searchByOfficialName(officialName);

    if (league) {
      throw new DuplicateLeagueNameError(officialName, 'OFFICIAL_NAME');
    }
  }
}

export default LeagueValidationNameService;
