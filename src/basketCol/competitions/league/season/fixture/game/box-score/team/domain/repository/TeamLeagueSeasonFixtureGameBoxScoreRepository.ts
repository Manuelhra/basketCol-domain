import { TeamLeagueSeasonFixtureGameBoxScore } from '../TeamLeagueSeasonFixtureGameBoxScore';

export interface TeamLeagueSeasonFixtureGameBoxScoreRepository {
  save(teamLeagueSeasonFixtureGameBoxScore: TeamLeagueSeasonFixtureGameBoxScore): Promise<void>;
}
