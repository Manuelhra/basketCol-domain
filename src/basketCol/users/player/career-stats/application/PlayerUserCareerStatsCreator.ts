import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../shared/domain/services/IdUniquenessValidatorService';
import { PlayerUserValidationService } from '../../domain/services/PlayerUserValidationService';
import { IPlayerUserCareerStats } from '../domain/IPlayerUserCareerStats';
import { PlayerUserCareerStats } from '../domain/PlayerUserCareerStats';
import { PlayerUserCareerStatsRepository } from '../domain/repository/PlayerUserCareerStatsRepository';
import { PUCStatsCreatedAt } from '../domain/value-objects/PUCStatsCreatedAt';
import { PUCStatsId } from '../domain/value-objects/PUCStatsId';
import { PUCStatsPlayerUserId } from '../domain/value-objects/PUCStatsPlayerUserId';
import { PUCStatsUpdatedAt } from '../domain/value-objects/PUCStatsUpdatedAt';
import { CreatePlayerUserCareerStatsDTO } from './dto/CreatePlayerUserCareerStatsDTO';

export class PlayerUserCareerStatsCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #playerUserCareerStatsRepository: PlayerUserCareerStatsRepository;

  public constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    businessDateService: BusinessDateService;
    playerUserCareerStatsRepository: PlayerUserCareerStatsRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#playerUserCareerStatsRepository = dependencies.playerUserCareerStatsRepository;
  }

  public async run(payload: CreatePlayerUserCareerStatsDTO): Promise<void> {
    const {
      id,
      totalGamesPlayed,
      totalGamesWon,
      totalSeasonsLeaguePlayed,
      totalSeasonsLeagueWon,
      totalPoints,
      totalOffensiveRebounds,
      totalDefensiveRebounds,
      totalAssists,
      totalSteals,
      totalBlocks,
      totalFouls,
      totalTurnovers,
      totalThreePointersAttempted,
      totalThreePointersMade,
      totalFreeThrowsAttempted,
      totalFreeThrowsMade,
      totalFieldGoalsAttempted,
      totalFieldGoalsMade,
      playerUserId,
    } = payload;

    const pUCStatsId: PUCStatsId = new PUCStatsId(id);
    const pUCStatsPlayerUserId: PUCStatsPlayerUserId = new PUCStatsPlayerUserId(playerUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<PUCStatsId, IPlayerUserCareerStats, PlayerUserCareerStats>(pUCStatsId);
    await this.#playerUserValidationService.ensurePlayerUserExists(pUCStatsPlayerUserId.value);

    const pUCStatsCreatedAt: PUCStatsCreatedAt = this.#businessDateService.getCurrentDate();
    const pUCStatsUpdatedAt: PUCStatsUpdatedAt = this.#businessDateService.getCurrentDate();

    const playerUserCareerStats: PlayerUserCareerStats = new PlayerUserCareerStats(
      pUCStatsId.value,
      totalGamesPlayed,
      totalGamesWon,
      totalSeasonsLeaguePlayed,
      totalSeasonsLeagueWon,
      totalPoints,
      totalOffensiveRebounds,
      totalDefensiveRebounds,
      totalAssists,
      totalSteals,
      totalBlocks,
      totalFouls,
      totalTurnovers,
      totalThreePointersAttempted,
      totalThreePointersMade,
      totalFreeThrowsAttempted,
      totalFreeThrowsMade,
      totalFieldGoalsAttempted,
      totalFieldGoalsMade,
      pUCStatsPlayerUserId.playerUserIdAsString,
      pUCStatsCreatedAt.value,
      pUCStatsUpdatedAt.value,
    );

    return this.#playerUserCareerStatsRepository.save(playerUserCareerStats);
  }
}
