import { Nullable } from '../../../../shared/domain/Nullable';
import { League } from '../League';
import { DuplicateLeagueNameError } from '../exceptions/DuplicateLeagueNameError';
import { ILeagueRepository } from '../repository/ILeagueRepository';
import { LeagueName } from '../value-objects/LeagueName';

export class LeagueValidationNameService {
  readonly #leagueRepository: ILeagueRepository;

  constructor(dependencies: {
    leagueRepository: ILeagueRepository
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
