import { Nullable } from '../../../../shared/domain/Nullable';
import { LeagueNotFoundError } from '../exceptions/LeagueNotFoundError';
import { League } from '../League';
import { ILeagueRepository } from '../repository/ILeagueRepository';
import { LeagueId } from '../value-objects/LeagueId';

export class LeagueValidationService {
  readonly #leagueRepository: ILeagueRepository;

  constructor(dependencies: {
    leagueRepository: ILeagueRepository,
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
