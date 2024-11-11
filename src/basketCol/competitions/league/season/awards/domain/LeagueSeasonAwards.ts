import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { ILeagueSeasonAwardsPrimitives } from './ILeagueSeasonAwardsPrimitives';
import { LeagueSeasonAwardsId } from './value-objects/LeagueSeasonAwardsId';
import { LSABestAssistProviderId } from './value-objects/LSABestAssistProviderId';
import { LSABestDefensiveRebounderId } from './value-objects/LSABestDefensiveRebounderId';
import { LSABestFreeThrowShooterId } from './value-objects/LSABestFreeThrowShooterId';
import { LSABestOffensiveRebounderId } from './value-objects/LSABestOffensiveRebounderId';
import { LSABestThreePointShooterId } from './value-objects/LSABestThreePointShooterId';
import { LSABestTwoPointShooterId } from './value-objects/LSABestTwoPointShooterId';
import { LSAChampionTeamId } from './value-objects/LSAChampionTeamId';
import { LSACreatedAt } from './value-objects/LSACreatedAt';
import { LSALeagueSeasonId } from './value-objects/LSALeagueSeasonId';
import { LSAUpdatedAt } from './value-objects/LSAUpdatedAt';

export class LeagueSeasonAwards extends AggregateRoot<ILeagueSeasonAwardsPrimitives> {
  readonly #bestThreePointShooterId: LSABestThreePointShooterId;

  readonly #bestTwoPointShooterId: LSABestTwoPointShooterId;

  readonly #bestFreeThrowShooterId: LSABestFreeThrowShooterId;

  readonly #bestAssistProviderId: LSABestAssistProviderId;

  readonly #bestOffensiveRebounderId: LSABestOffensiveRebounderId;

  readonly #bestDefensiveRebounderId: LSABestDefensiveRebounderId;

  readonly #championTeamId: LSAChampionTeamId;

  readonly #leagueSeasonId: LSALeagueSeasonId;

  private constructor(
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
    const leagueSeasonAwardsId: LeagueSeasonAwardsId = LeagueSeasonAwardsId.create(id);
    const lSACreatedAt: LSACreatedAt = LSACreatedAt.create(createdAt);
    const lSAUpdatedAt: LSAUpdatedAt = LSAUpdatedAt.create(updatedAt);

    super(leagueSeasonAwardsId, lSACreatedAt, lSAUpdatedAt);

    this.#bestThreePointShooterId = LSABestThreePointShooterId.create(bestThreePointShooterId);
    this.#bestTwoPointShooterId = LSABestTwoPointShooterId.create(bestTwoPointShooterId);
    this.#bestFreeThrowShooterId = LSABestFreeThrowShooterId.create(bestFreeThrowShooterId);
    this.#bestAssistProviderId = LSABestAssistProviderId.create(bestAssistProviderId);
    this.#bestOffensiveRebounderId = LSABestOffensiveRebounderId.create(bestOffensiveRebounderId);
    this.#bestDefensiveRebounderId = LSABestDefensiveRebounderId.create(bestDefensiveRebounderId);
    this.#championTeamId = LSAChampionTeamId.create(championTeamId);
    this.#leagueSeasonId = LSALeagueSeasonId.create(leagueSeasonId);
  }

  public override get toPrimitives(): ILeagueSeasonAwardsPrimitives {
    return {
      id: this.id.value,
      bestThreePointShooterId: this.#bestThreePointShooterId.value,
      bestTwoPointShooterId: this.#bestTwoPointShooterId.value,
      bestFreeThrowShooterId: this.#bestFreeThrowShooterId.value,
      bestAssistProviderId: this.#bestAssistProviderId.value,
      bestOffensiveRebounderId: this.#bestOffensiveRebounderId.value,
      bestDefensiveRebounderId: this.#bestDefensiveRebounderId.value,
      championTeamId: this.#championTeamId.value,
      leagueSeasonId: this.#leagueSeasonId.value,
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
