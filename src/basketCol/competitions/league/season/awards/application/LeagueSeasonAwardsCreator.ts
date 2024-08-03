import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { TeamValidationService } from '../../../../../team/domain/services/TeamValidationService';
import { PlayerUserValidationService } from '../../../../../users/player/domain/services/PlayerUserValidationService';
import { LeagueSeasonValidationService } from '../../domain/services/LeagueSeasonValidationService';
import { ILeagueSeasonAwards } from '../domain/ILeagueSeasonAwards';
import { LeagueSeasonAwards } from '../domain/LeagueSeasonAwards';
import { LeagueSeasonAwardsRepository } from '../domain/repository/LeagueSeasonAwardsRepository';
import { LeagueSeasonAwardsId } from '../domain/value-objects/LeagueSeasonAwardsId';
import { LSABestAssistProviderId } from '../domain/value-objects/LSABestAssistProviderId';
import { LSABestDefensiveRebounderId } from '../domain/value-objects/LSABestDefensiveRebounderId';
import { LSABestFreeThrowShooterId } from '../domain/value-objects/LSABestFreeThrowShooterId';
import { LSABestOffensiveRebounderId } from '../domain/value-objects/LSABestOffensiveRebounderId';
import { LSABestThreePointShooterId } from '../domain/value-objects/LSABestThreePointShooterId';
import { LSABestTwoPointShooterId } from '../domain/value-objects/LSABestTwoPointShooterId';
import { LSAChampionTeamId } from '../domain/value-objects/LSAChampionTeamId';
import { LSACreatedAt } from '../domain/value-objects/LSACreatedAt';
import { LSAReferencedLeagueSeasonId } from '../domain/value-objects/LSAReferencedLeagueSeasonId';
import { LSAUpdatedAt } from '../domain/value-objects/LSAUpdatedAt';
import { CreateLeagueSeasonAwardsDTO } from './dto/CreateLeagueSeasonAwardsDTO';

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

  public async run(payload: CreateLeagueSeasonAwardsDTO): Promise<void> {
    const {
      id,
      bestThreePointShooterId,
      bestTwoPointShooterId,
      bestFreeThrowShooterId,
      bestAssistProviderId,
      bestOffensiveRebounderId,
      bestDefensiveRebounderId,
      championTeamId,
      leagueSeasonId,
    } = payload;

    const leagueSeasonAwardsId: LeagueSeasonAwardsId = new LeagueSeasonAwardsId(id);
    const lSABestThreePointShooterId: LSABestThreePointShooterId = new LSABestThreePointShooterId(bestThreePointShooterId);
    const lSABestTwoPointShooterId: LSABestTwoPointShooterId = new LSABestTwoPointShooterId(bestTwoPointShooterId);
    const lSABestFreeThrowShooterId: LSABestFreeThrowShooterId = new LSABestFreeThrowShooterId(bestFreeThrowShooterId);
    const lSABestAssistProviderId: LSABestAssistProviderId = new LSABestAssistProviderId(bestAssistProviderId);
    const lSABestOffensiveRebounderId: LSABestOffensiveRebounderId = new LSABestOffensiveRebounderId(bestOffensiveRebounderId);
    const lSABestDefensiveRebounderId: LSABestDefensiveRebounderId = new LSABestDefensiveRebounderId(bestDefensiveRebounderId);
    const lSAChampionTeamId: LSAChampionTeamId = new LSAChampionTeamId(championTeamId);
    const lSALeagueSeasonId: LSAReferencedLeagueSeasonId = new LSAReferencedLeagueSeasonId(leagueSeasonId);

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueSeasonAwardsId, ILeagueSeasonAwards, LeagueSeasonAwards>(leagueSeasonAwardsId);
    await this.#playerUserValidationService.ensurePlayerUserExists(lSABestThreePointShooterId.value);
    await this.#playerUserValidationService.ensurePlayerUserExists(lSABestTwoPointShooterId.value);
    await this.#playerUserValidationService.ensurePlayerUserExists(lSABestFreeThrowShooterId.value);
    await this.#playerUserValidationService.ensurePlayerUserExists(lSABestAssistProviderId.value);
    await this.#playerUserValidationService.ensurePlayerUserExists(lSABestOffensiveRebounderId.value);
    await this.#playerUserValidationService.ensurePlayerUserExists(lSABestDefensiveRebounderId.value);
    await this.#teamValidationService.ensureTeamExists(lSAChampionTeamId.value);
    await this.#leagueSeasonValidationService.ensureLeagueSeasonExists(lSALeagueSeasonId.value);

    const lSACreatedAt: LSACreatedAt = this.#businessDateService.getCurrentDate();
    const lSAUpdatedAt: LSAUpdatedAt = this.#businessDateService.getCurrentDate();

    const leagueSeasonAwards: LeagueSeasonAwards = new LeagueSeasonAwards(
      leagueSeasonAwardsId.value,
      lSABestThreePointShooterId.playerUserIdAsString,
      lSABestTwoPointShooterId.playerUserIdAsString,
      lSABestFreeThrowShooterId.playerUserIdAsString,
      lSABestAssistProviderId.playerUserIdAsString,
      lSABestOffensiveRebounderId.playerUserIdAsString,
      lSABestDefensiveRebounderId.playerUserIdAsString,
      lSAChampionTeamId.teamIdAsString,
      lSALeagueSeasonId.leagueSeasonIdAsString,
      lSACreatedAt.value,
      lSAUpdatedAt.value,
    );

    return this.#leagueSeasonAwardsRepository.save(leagueSeasonAwards);
  }
}
