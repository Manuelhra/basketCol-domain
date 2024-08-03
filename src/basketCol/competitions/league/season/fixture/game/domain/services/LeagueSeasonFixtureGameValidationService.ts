import { Nullable } from '../../../../../../../shared/domain/Nullable';
import { LeagueSeasonFixtureGameNotFoundError } from '../exceptions/LeagueSeasonFixtureGameNotFoundError';
import { LeagueSeasonFixtureGame } from '../LeagueSeasonFixtureGame';
import { LeagueSeasonFixtureGameRepository } from '../repository/LeagueSeasonFixtureGameRepository';
import { LSFGameId } from '../value-objects/LSFGameId';

export class LeagueSeasonFixtureGameValidationService {
  readonly #leagueSeasonFixtureGameRepository: LeagueSeasonFixtureGameRepository;

  constructor(dependencies: {
    leagueSeasonFixtureGameRepository: LeagueSeasonFixtureGameRepository;
  }) {
    this.#leagueSeasonFixtureGameRepository = dependencies.leagueSeasonFixtureGameRepository;
  }

  public async ensureLeagueSeasonFixtureGameExists(leagueSeasonFixtureGameId: LSFGameId): Promise<void> {
    const leagueSeasonFixtureGameFound: Nullable<LeagueSeasonFixtureGame> = await this.#leagueSeasonFixtureGameRepository.searchById(leagueSeasonFixtureGameId);

    if (leagueSeasonFixtureGameFound === undefined || leagueSeasonFixtureGameFound === null) {
      throw new LeagueSeasonFixtureGameNotFoundError(leagueSeasonFixtureGameId);
    }
  }
}
