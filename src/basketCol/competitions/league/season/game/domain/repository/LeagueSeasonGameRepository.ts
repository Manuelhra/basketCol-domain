import { LeagueSeasonGame } from '../LeagueSeasonGame';

export interface LeagueSeasonGameRepository {
  save(leagueSeasonGame: LeagueSeasonGame): Promise<void>;
}
