import { LeagueSeasonAwards } from '../LeagueSeasonAwards';

export interface ILeagueSeasonAwardsRepository {
  save(leagueSeasonAwards: LeagueSeasonAwards): Promise<void>;
}
