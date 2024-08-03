import { BusinessDateService } from '../../../../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../../../../../../../users/player/domain/services/PlayerUserValidationService';
import { LeagueSeasonFixtureGameValidationService } from '../../../domain/services/LeagueSeasonFixtureGameValidationService';
import { IPlayerUserLeagueSeasonFixtureGameBoxScore } from '../domain/IPlayerUserLeagueSeasonFixtureGameBoxScore';
import { PlayerUserLeagueSeasonFixtureGameBoxScore } from '../domain/PlayerUserLeagueSeasonFixtureGameBoxScore';
import { PlayerUserLeagueSeasonFixtureGameBoxScoreRepository } from '../domain/repository/PlayerUserLeagueSeasonFixtureGameBoxScoreRepository';
import { PLSFGBoxScoreCreatedAt } from '../domain/value-objects/PLSFGBoxScoreCreatedAt';
import { PLSFGBoxScoreFixtureGameId } from '../domain/value-objects/PLSFGBoxScoreFixtureGameId';
import { PLSFGBoxScoreId } from '../domain/value-objects/PLSFGBoxScoreId';
import { PLSFGBoxScorePlayerUserId } from '../domain/value-objects/PLSFGBoxScorePlayerUserId';
import { PLSFGBoxScoreUpdatedAt } from '../domain/value-objects/PLSFGBoxScoreUpdatedAt';
import { CreatePlayerUserLeagueSeasonFixtureGameBoxScoreDTO } from './dto/CreatePlayerUserLeagueSeasonFixtureGameBoxScoreDTO';

export class PlayerUserLeagueSeasonFixtureGameBoxScoreCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonFixtureGameValidationService: LeagueSeasonFixtureGameValidationService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #playerUserLeagueSeasonFixtureGameBoxScoreRepository: PlayerUserLeagueSeasonFixtureGameBoxScoreRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    leagueSeasonFixtureGameValidationService: LeagueSeasonFixtureGameValidationService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    playerUserLeagueSeasonFixtureGameBoxScoreRepository: PlayerUserLeagueSeasonFixtureGameBoxScoreRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#leagueSeasonFixtureGameValidationService = dependencies.leagueSeasonFixtureGameValidationService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#playerUserLeagueSeasonFixtureGameBoxScoreRepository = dependencies.playerUserLeagueSeasonFixtureGameBoxScoreRepository;
  }

  public async run(payload: CreatePlayerUserLeagueSeasonFixtureGameBoxScoreDTO): Promise<void> {
    const {
      id,
      points,
      offensiveRebounds,
      defensiveRebounds,
      assists,
      steals,
      blocks,
      fouls,
      turnovers,
      threePointersAttempted,
      threePointersMade,
      freeThrowsAttempted,
      freeThrowsMade,
      fieldGoalsAttempted,
      fieldGoalsMade,
      fixtureGameId,
      playerUserId,
    } = payload;

    const pLSFGBoxScoreId: PLSFGBoxScoreId = new PLSFGBoxScoreId(id);
    const pLSFGBoxScoreFixtureGameId: PLSFGBoxScoreFixtureGameId = new PLSFGBoxScoreFixtureGameId(fixtureGameId);
    const pLSFGBoxScorePlayerUserId: PLSFGBoxScorePlayerUserId = new PLSFGBoxScorePlayerUserId(playerUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<PLSFGBoxScoreId, IPlayerUserLeagueSeasonFixtureGameBoxScore, PlayerUserLeagueSeasonFixtureGameBoxScore>(pLSFGBoxScoreId);
    await this.#leagueSeasonFixtureGameValidationService.ensureLeagueSeasonFixtureGameExists(pLSFGBoxScoreFixtureGameId.value);
    await this.#playerUserValidationService.ensurePlayerUserExists(pLSFGBoxScorePlayerUserId.value);

    const pLSFGBoxScoreCreatedAt: PLSFGBoxScoreCreatedAt = this.#businessDateService.getCurrentDate();
    const pLSFGBoxScoreUpdatedAt: PLSFGBoxScoreUpdatedAt = this.#businessDateService.getCurrentDate();

    const playerUserLeagueSeasonFixtureGameBoxScore: PlayerUserLeagueSeasonFixtureGameBoxScore = new PlayerUserLeagueSeasonFixtureGameBoxScore(
      pLSFGBoxScoreId.value,
      points,
      offensiveRebounds,
      defensiveRebounds,
      assists,
      steals,
      blocks,
      fouls,
      turnovers,
      threePointersAttempted,
      threePointersMade,
      freeThrowsAttempted,
      freeThrowsMade,
      fieldGoalsAttempted,
      fieldGoalsMade,
      pLSFGBoxScoreFixtureGameId.fixtureGameIdAsString,
      pLSFGBoxScorePlayerUserId.playerUserIdAsString,
      pLSFGBoxScoreCreatedAt.value,
      pLSFGBoxScoreUpdatedAt.value,
    );

    return this.#playerUserLeagueSeasonFixtureGameBoxScoreRepository.save(playerUserLeagueSeasonFixtureGameBoxScore);
  }
}
