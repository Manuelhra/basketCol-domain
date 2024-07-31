import { LeagueSeasonFixtureGame } from '../LeagueSeasonFixtureGame';

export interface LeagueSeasonFixtureGameRepository {
  save(leagueSeasonFixtureGame: LeagueSeasonFixtureGame): Promise<void>;
}
