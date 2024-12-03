import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface ILeagueSeasonAwardsPrimitives extends IAggregateRootPrimitives {
  bestThreePointShooterId: string;
  bestTwoPointShooterId: string;
  bestFreeThrowShooterId: string;
  bestAssistProviderId: string;
  bestOffensiveRebounderId: string;
  bestDefensiveRebounderId: string;
  championTeamId: string;
  leagueSeasonId: string;
}

// TODO: Crear la key de MVP o mejor jugador de la temporada
