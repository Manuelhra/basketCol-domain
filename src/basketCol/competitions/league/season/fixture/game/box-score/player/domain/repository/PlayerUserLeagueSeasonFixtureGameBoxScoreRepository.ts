import { PlayerUserLeagueSeasonFixtureGameBoxScore } from '../PlayerUserLeagueSeasonFixtureGameBoxScore';

export interface PlayerUserLeagueSeasonFixtureGameBoxScoreRepository {
  save(playerUserLeagueSeasonFixtureGameBoxScore: PlayerUserLeagueSeasonFixtureGameBoxScore): Promise<void>;
}
