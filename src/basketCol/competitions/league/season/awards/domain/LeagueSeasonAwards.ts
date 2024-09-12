import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { ILeagueSeasonAwards } from './ILeagueSeasonAwards';
import { LeagueSeasonAwardsId } from './value-objects/LeagueSeasonAwardsId';
import { LSABestAssistProviderId } from './value-objects/LSABestAssistProviderId';
import { LSABestDefensiveRebounderId } from './value-objects/LSABestDefensiveRebounderId';
import { LSABestFreeThrowShooterId } from './value-objects/LSABestFreeThrowShooterId';
import { LSABestOffensiveRebounderId } from './value-objects/LSABestOffensiveRebounderId';
import { LSABestThreePointShooterId } from './value-objects/LSABestThreePointShooterId';
import { LSABestTwoPointShooterId } from './value-objects/LSABestTwoPointShooterId';
import { LSAChampionTeamId } from './value-objects/LSAChampionTeamId';
import { LSACreatedAt } from './value-objects/LSACreatedAt';
import { LSAReferencedLeagueSeasonId } from './value-objects/LSAReferencedLeagueSeasonId';
import { LSAUpdatedAt } from './value-objects/LSAUpdatedAt';

export class LeagueSeasonAwards extends AggregateRoot<ILeagueSeasonAwards> {
  readonly #bestThreePointShooterId: LSABestThreePointShooterId;

  readonly #bestTwoPointShooterId: LSABestTwoPointShooterId;

  readonly #bestFreeThrowShooterId: LSABestFreeThrowShooterId;

  readonly #bestAssistProviderId: LSABestAssistProviderId;

  readonly #bestOffensiveRebounderId: LSABestOffensiveRebounderId;

  readonly #bestDefensiveRebounderId: LSABestDefensiveRebounderId;

  readonly #championTeamId: LSAChampionTeamId;

  readonly #leagueSeasonId: LSAReferencedLeagueSeasonId;

  constructor(
    id: string,
    bestThreePointShooterId: string,
    bestTwoPointShooterId: string,
    bestFreeThrowShooterId: string,
    bestAssistProviderId: string,
    bestOffensiveRebounderId: string,
    bestDefensiveRebounderId: string,
    championTeamId: string,
    leagueSeasonId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const leagueSeasonAwardsId: LeagueSeasonAwardsId = new LeagueSeasonAwardsId(id);
    const lSACreatedAt: LSACreatedAt = new LSACreatedAt(createdAt);
    const lSAUpdatedAt: LSAUpdatedAt = new LSAUpdatedAt(updatedAt);

    super(leagueSeasonAwardsId, lSACreatedAt, lSAUpdatedAt);

    this.#bestThreePointShooterId = new LSABestThreePointShooterId(bestThreePointShooterId);
    this.#bestTwoPointShooterId = new LSABestTwoPointShooterId(bestTwoPointShooterId);
    this.#bestFreeThrowShooterId = new LSABestFreeThrowShooterId(bestFreeThrowShooterId);
    this.#bestAssistProviderId = new LSABestAssistProviderId(bestAssistProviderId);
    this.#bestOffensiveRebounderId = new LSABestOffensiveRebounderId(bestOffensiveRebounderId);
    this.#bestDefensiveRebounderId = new LSABestDefensiveRebounderId(bestDefensiveRebounderId);
    this.#championTeamId = new LSAChampionTeamId(championTeamId);
    this.#leagueSeasonId = new LSAReferencedLeagueSeasonId(leagueSeasonId);
  }

  public override toPrimitives(): ILeagueSeasonAwards {
    return {
      id: this.id.value,
      bestThreePointShooterId: this.#bestThreePointShooterId.playerUserIdAsString,
      bestTwoPointShooterId: this.#bestTwoPointShooterId.playerUserIdAsString,
      bestFreeThrowShooterId: this.#bestFreeThrowShooterId.playerUserIdAsString,
      bestAssistProviderId: this.#bestAssistProviderId.playerUserIdAsString,
      bestOffensiveRebounderId: this.#bestOffensiveRebounderId.playerUserIdAsString,
      bestDefensiveRebounderId: this.#bestDefensiveRebounderId.playerUserIdAsString,
      championTeamId: this.#championTeamId.teamIdAsString,
      leagueSeasonId: this.#leagueSeasonId.leagueSeasonIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    bestThreePointShooterId: string,
    bestTwoPointShooterId: string,
    bestFreeThrowShooterId: string,
    bestAssistProviderId: string,
    bestOffensiveRebounderId: string,
    bestDefensiveRebounderId: string,
    championTeamId: string,
    leagueSeasonId: string,
    createdAt: string,
    updatedAt: string,
  ): LeagueSeasonAwards {
    return new LeagueSeasonAwards(
      id,
      bestThreePointShooterId,
      bestTwoPointShooterId,
      bestFreeThrowShooterId,
      bestAssistProviderId,
      bestOffensiveRebounderId,
      bestDefensiveRebounderId,
      championTeamId,
      leagueSeasonId,
      createdAt,
      updatedAt,
    );
  }
}
