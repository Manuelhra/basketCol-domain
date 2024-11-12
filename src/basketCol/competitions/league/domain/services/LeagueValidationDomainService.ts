import { Nullable } from '../../../../shared/domain/Nullable';
import { DuplicateLeagueNameError } from '../exceptions/DuplicateLeagueNameError';
import { LeagueNotFoundError } from '../exceptions/LeagueNotFoundError';
import { League } from '../League';
import { ILeagueRepository } from '../repository/ILeagueRepository';
import { LeagueId } from '../value-objects/LeagueId';
import { LeagueName } from '../value-objects/LeagueName';

type Dependencies = {
  readonly leagueRepository: ILeagueRepository,
};

export class LeagueValidationDomainService {
  readonly #leagueRepository: ILeagueRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueRepository = dependencies.leagueRepository;
  }

  public static create(dependencies: Dependencies): LeagueValidationDomainService {
    return new LeagueValidationDomainService(dependencies);
  }

  public async ensureLeagueExists(leagueId: LeagueId): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.findById(leagueId);

    if (leagueFound === undefined || leagueFound === null) {
      throw LeagueNotFoundError.create(leagueId);
    }
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
