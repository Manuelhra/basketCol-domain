import { LeagueSeason } from '../LeagueSeason';

export interface LeagueSeasonRepository {
  save(leagueSeason: LeagueSeason): Promise<void>;
}
