import { IAggregateRoot } from '../../../../shared/domain/IAggregateRoot';

export interface ILeagueSeasonAwards extends IAggregateRoot {
  bestThreePointShooterId: string;
  bestTwoPointShooterId: string;
  bestFreeThrowShooterId: string;
  bestAssistProviderId: string;
  bestOffensiveRebounderId: string;
  bestDefensiveRebounderId: string;
  championTeamId: string;
  leagueSeasonId: string;
}
