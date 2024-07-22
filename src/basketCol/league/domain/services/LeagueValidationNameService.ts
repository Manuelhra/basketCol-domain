import { Nullable } from '../../../shared/domain/Nullable';
import { League } from '../League';
import { DuplicateLeagueNameError } from '../exceptions/DuplicateLeagueNameError';
import { LeagueRepository } from '../repository/LeagueRepository';
import { LeagueName } from '../value-objects/LeagueName';

export class LeagueValidationNameService {
  readonly #leagueRepository: LeagueRepository;

  constructor(dependencies: {
    leagueRepository: LeagueRepository
  }) {
    this.#leagueRepository = dependencies.leagueRepository;
  }

  public async validateUniqueShortName(leagueName: LeagueName): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.searchByShortName(leagueName);

    if (leagueFound) {
      throw new DuplicateLeagueNameError(leagueName, 'SHORT_NAME');
    }
  }

  public async validateUniqueOfficialName(leagueName: LeagueName): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.searchByOfficialName(leagueName);

    if (leagueFound) {
      throw new DuplicateLeagueNameError(leagueName, 'OFFICIAL_NAME');
    }
  }
}
