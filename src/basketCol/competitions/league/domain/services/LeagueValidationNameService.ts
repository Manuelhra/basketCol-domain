import { Nullable } from '../../../../shared/domain/Nullable';
import { League } from '../League';
import { DuplicateLeagueNameError } from '../exceptions/DuplicateLeagueNameError';
import { ILeagueRepository } from '../repository/ILeagueRepository';
import { LeagueName } from '../value-objects/LeagueName';

type Dependencies = {
  readonly leagueRepository: ILeagueRepository
};

export class LeagueValidationNameService {
  readonly #leagueRepository: ILeagueRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueRepository = dependencies.leagueRepository;
  }

  public static create(dependencies: Dependencies): LeagueValidationNameService {
    return new LeagueValidationNameService(dependencies);
  }

  public async validateUniqueShortName(leagueName: LeagueName): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.findByShortName(leagueName);

    if (leagueFound) {
      throw DuplicateLeagueNameError.create(leagueName, 'SHORT_NAME');
    }
  }

  public async validateUniqueOfficialName(leagueName: LeagueName): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.findByOfficialName(leagueName);

    if (leagueFound) {
      throw DuplicateLeagueNameError.create(leagueName, 'OFFICIAL_NAME');
    }
  }
}
