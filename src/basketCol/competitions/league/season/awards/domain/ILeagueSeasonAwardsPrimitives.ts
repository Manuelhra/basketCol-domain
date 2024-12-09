import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface ILeagueSeasonAwardsPrimitives extends IAggregateRootPrimitives {
  bestThreePointShooterId: string;
  bestTwoPointShooterId: string;
  bestFreeThrowShooterId: string;
  bestAssistProviderId: string;
  bestOffensiveRebounderId: string;
  bestDefensiveRebounderId: string;
  mostValuablePlayerId: string;
  championTeamId: string;
  leagueSeasonId: string;
}
