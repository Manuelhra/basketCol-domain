import { LeagueSeasonAwards } from '../LeagueSeasonAwards';

export interface LeagueSeasonAwardsRepository {
  save(leagueSeasonAwards: LeagueSeasonAwards): Promise<void>;
}
