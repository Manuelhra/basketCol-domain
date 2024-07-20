import { Nullable } from '../../../shared/domain/Nullable';
import  { LeagueNotFoundError }  from '../exceptions/LeagueNotFoundError';
import { League } from '../League';
import { LeagueRepository } from '../repository/LeagueRepository';
import { LeagueId } from '../value-objects/LeagueId';

export class LeagueValidationService {
  readonly #leagueRepository: LeagueRepository;

  constructor(dependencies: {
    leagueRepository: LeagueRepository,
  }) {
    this.#leagueRepository = dependencies.leagueRepository;
  }

  public async ensureLeagueExist(leagueId: LeagueId): Promise<void> {
    const leagueFound: Nullable<League> = await this.#leagueRepository.searchById(leagueId);

    if (leagueFound === undefined || leagueFound === null) {
      throw new LeagueNotFoundError(leagueId);
    }
  }
}

