import { IGame } from '../../../../shared/domain/IGame';

export interface ILeagueSeasonGame extends IGame {
  leagueSeasonId: string;
}
