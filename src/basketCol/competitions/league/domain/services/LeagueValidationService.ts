import { Nullable } from '../../../../shared/domain/Nullable';
import { LeagueNotFoundError } from '../exceptions/LeagueNotFoundError';
import { League } from '../League';
import { ILeagueRepository } from '../repository/ILeagueRepository';
import { LeagueId } from '../value-objects/LeagueId';

type Dependencies = {
  readonly leagueRepository: ILeagueRepository,
};

export class LeagueValidationService {
  readonly #leagueRepository: ILeagueRepository;

  private constructor(dependencies: Dependencies) {
    this.#leagueRepository = dependencies.leagueRepository;
  }

  public static create(dependencies: Dependencies): LeagueValidationService {
    return new LeagueValidationService(dependencies);
  }

  public async ensureLeagueExist(leagueId: LeagueId): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.findById(leagueId);

    if (leagueFound === undefined || leagueFound === null) {
      throw LeagueNotFoundError.create(leagueId);
    }
  }
}
