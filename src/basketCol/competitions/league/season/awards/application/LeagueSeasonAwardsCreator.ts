import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { TeamValidationService } from '../../../../../team/domain/services/TeamValidationService';
import { TeamId } from '../../../../../team/domain/value-objects/TeamId';
import { PlayerUserValidationService } from '../../../../../users/player/domain/services/PlayerUserValidationService';
import { PlayerUserId } from '../../../../../users/player/domain/value-objects/PlayerUserId';
import { LeagueSeasonValidationService } from '../../domain/services/LeagueSeasonValidationService';
import { LeagueSeasonId } from '../../domain/value-objects/LeagueSeasonId';
import { ILeagueSeasonAwards } from '../domain/ILeagueSeasonAwards';
import { LeagueSeasonAwards } from '../domain/LeagueSeasonAwards';
import { LeagueSeasonAwardsRepository } from '../domain/repository/LeagueSeasonAwardsRepository';
import { LeagueSeasonAwardsId } from '../domain/value-objects/LeagueSeasonAwardsId';
import { LSACreatedAt } from '../domain/value-objects/LSACreatedAt';
import { LSAUpdatedAt } from '../domain/value-objects/LSAUpdatedAt';
import { LeagueSeasonAwardsCreatorPayload } from './LeagueSeasonAwardsCreatorPayload';

export class LeagueSeasonAwardsCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #playerUserValidationService: PlayerUserValidationService;

  readonly #teamValidationService: TeamValidationService;

  readonly #leagueSeasonValidationService: LeagueSeasonValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #leagueSeasonAwardsRepository: LeagueSeasonAwardsRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    playerUserValidationService: PlayerUserValidationService;
    teamValidationService: TeamValidationService;
    leagueSeasonValidationService: LeagueSeasonValidationService;
    businessDateService: BusinessDateService;
    leagueSeasonAwardsRepository: LeagueSeasonAwardsRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserValidationService = dependencies.playerUserValidationService;
    this.#teamValidationService = dependencies.teamValidationService;
    this.#leagueSeasonValidationService = dependencies.leagueSeasonValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#leagueSeasonAwardsRepository = dependencies.leagueSeasonAwardsRepository;
  }

  public async run(payload: LeagueSeasonAwardsCreatorPayload): Promise<void> {
    const { id } = payload;

    const leagueSeasonAwardsId: LeagueSeasonAwardsId = new LeagueSeasonAwardsId(id);
    const bestThreePointShooterId: PlayerUserId = new PlayerUserId(payload.bestThreePointShooterId);
    const bestTwoPointShooterId: PlayerUserId = new PlayerUserId(payload.bestTwoPointShooterId);
    const bestFreeThrowShooterId: PlayerUserId = new PlayerUserId(payload.bestFreeThrowShooterId);
    const bestAssistProviderId: PlayerUserId = new PlayerUserId(payload.bestAssistProviderId);
    const bestOffensiveRebounderId: PlayerUserId = new PlayerUserId(payload.bestOffensiveRebounderId);
    const bestDefensiveRebounderId: PlayerUserId = new PlayerUserId(payload.bestDefensiveRebounderId);
    const championTeamId: TeamId = new TeamId(payload.championTeamId);
    const leagueSeasonId: LeagueSeasonId = new LeagueSeasonId(payload.leagueSeasonId);

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueSeasonAwardsId, ILeagueSeasonAwards, LeagueSeasonAwards>(leagueSeasonAwardsId);
    await this.#playerUserValidationService.ensurePlayerUserExists(bestThreePointShooterId);
    await this.#playerUserValidationService.ensurePlayerUserExists(bestTwoPointShooterId);
    await this.#playerUserValidationService.ensurePlayerUserExists(bestFreeThrowShooterId);
    await this.#playerUserValidationService.ensurePlayerUserExists(bestAssistProviderId);
    await this.#playerUserValidationService.ensurePlayerUserExists(bestOffensiveRebounderId);
    await this.#playerUserValidationService.ensurePlayerUserExists(bestDefensiveRebounderId);
    await this.#teamValidationService.ensureTeamExists(championTeamId);
    await this.#leagueSeasonValidationService.ensureLeagueSeasonExists(leagueSeasonId);

    const lSACreatedAt: LSACreatedAt = this.#businessDateService.getCurrentDate<LSACreatedAt>();
    const lSAUpdatedAt: LSAUpdatedAt = this.#businessDateService.getCurrentDate<LSAUpdatedAt>();

    const leagueSeasonAwards: LeagueSeasonAwards = new LeagueSeasonAwards(
      leagueSeasonAwardsId.getValue(),
      bestThreePointShooterId.getValue(),
      bestTwoPointShooterId.getValue(),
      bestFreeThrowShooterId.getValue(),
      bestAssistProviderId.getValue(),
      bestOffensiveRebounderId.getValue(),
      bestDefensiveRebounderId.getValue(),
      championTeamId.getValue(),
      leagueSeasonId.getValue(),
      lSACreatedAt.getValue(),
      lSAUpdatedAt.getValue(),
    );

    return this.#leagueSeasonAwardsRepository.save(leagueSeasonAwards);
  }
}
