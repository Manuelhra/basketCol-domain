import { AggregateRoot } from '../../../../../shared/domain/AggregateRoot';
import { TeamId } from '../../../../../team/domain/value-objects/TeamId';
import { PlayerUserId } from '../../../../../users/player/domain/value-objects/PlayerUserId';
import { LeagueSeasonId } from '../../domain/value-objects/LeagueSeasonId';
import { ILeagueSeasonAwards } from './ILeagueSeasonAwards';
import { LeagueSeasonAwardsId } from './value-objects/LeagueSeasonAwardsId';
import { LSACreatedAt } from './value-objects/LSACreatedAt';
import { LSAUpdatedAt } from './value-objects/LSAUpdatedAt';

export class LeagueSeasonAwards extends AggregateRoot<ILeagueSeasonAwards> {
  readonly #bestThreePointShooterId: PlayerUserId;

  readonly #bestTwoPointShooterId: PlayerUserId;

  readonly #bestFreeThrowShooterId: PlayerUserId;

  readonly #bestAssistProviderId: PlayerUserId;

  readonly #bestOffensiveRebounderId: PlayerUserId;

  readonly #bestDefensiveRebounderId: PlayerUserId;

  readonly #championTeamId: TeamId;

  readonly #leagueSeasonId: LeagueSeasonId;

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

    this.#bestThreePointShooterId = new PlayerUserId(bestThreePointShooterId, 'bestThreePointShooterId');
    this.#bestTwoPointShooterId = new PlayerUserId(bestTwoPointShooterId, 'bestTwoPointShooterId');
    this.#bestFreeThrowShooterId = new PlayerUserId(bestFreeThrowShooterId, 'bestFreeThrowShooterId');
    this.#bestAssistProviderId = new PlayerUserId(bestAssistProviderId, 'bestAssistProviderId');
    this.#bestOffensiveRebounderId = new PlayerUserId(bestOffensiveRebounderId, 'bestOffensiveRebounderId');
    this.#bestDefensiveRebounderId = new PlayerUserId(bestDefensiveRebounderId, 'bestDefensiveRebounderId');
    this.#championTeamId = new TeamId(championTeamId, 'championTeamId');
    this.#leagueSeasonId = new LeagueSeasonId(leagueSeasonId, 'leagueSeasonId');
  }

  public toPrimitives(): ILeagueSeasonAwards {
    return {
      id: this.id.getValue(),
      bestThreePointShooterId: this.#bestThreePointShooterId.getValue(),
      bestTwoPointShooterId: this.#bestTwoPointShooterId.getValue(),
      bestFreeThrowShooterId: this.#bestFreeThrowShooterId.getValue(),
      bestAssistProviderId: this.#bestAssistProviderId.getValue(),
      bestOffensiveRebounderId: this.#bestOffensiveRebounderId.getValue(),
      bestDefensiveRebounderId: this.#bestDefensiveRebounderId.getValue(),
      championTeamId: this.#championTeamId.getValue(),
      leagueSeasonId: this.#leagueSeasonId.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}
