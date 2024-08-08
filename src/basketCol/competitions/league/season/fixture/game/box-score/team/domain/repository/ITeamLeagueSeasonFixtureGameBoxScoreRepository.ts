import { TeamLeagueSeasonFixtureGameBoxScore } from '../TeamLeagueSeasonFixtureGameBoxScore';

export interface ITeamLeagueSeasonFixtureGameBoxScoreRepository {
  save(teamLeagueSeasonFixtureGameBoxScore: TeamLeagueSeasonFixtureGameBoxScore): Promise<void>;
}
