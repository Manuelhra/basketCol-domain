import { Nullable } from '../../../shared/domain/Nullable';
import League from '../League';
import DuplicateLeagueNameError from '../exceptions/DuplicateLeagueNameError';
import { LeagueRepository } from '../repository/LeagueRepository';
import LeagueName from '../value-objects/LeagueName';

class LeagueValidationNameService {
  readonly #leagueRepository: LeagueRepository;

  constructor(dependencies: {
    leagueRepository: LeagueRepository
  }) {
    this.#leagueRepository = dependencies.leagueRepository;
  }

  public async ensureIsValidShortName(leagueName: LeagueName): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.searchByShortName(leagueName);

    if (leagueFound) {
      throw new DuplicateLeagueNameError(leagueName, 'SHORT_NAME');
    }
  }

  public async ensureIsValidOfficialName(leagueName: LeagueName): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.searchByOfficialName(leagueName);

    if (leagueFound) {
      throw new DuplicateLeagueNameError(leagueName, 'OFFICIAL_NAME');
    }
  }
}

export default LeagueValidationNameService;
