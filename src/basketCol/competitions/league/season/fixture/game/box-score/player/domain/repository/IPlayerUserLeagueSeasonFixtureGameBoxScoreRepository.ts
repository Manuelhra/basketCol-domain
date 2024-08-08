import { PlayerUserLeagueSeasonFixtureGameBoxScore } from '../PlayerUserLeagueSeasonFixtureGameBoxScore';

export interface IPlayerUserLeagueSeasonFixtureGameBoxScoreRepository {
  save(playerUserLeagueSeasonFixtureGameBoxScore: PlayerUserLeagueSeasonFixtureGameBoxScore): Promise<void>;
}
