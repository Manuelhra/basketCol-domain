import { Nullable } from '../../../../../../../../../shared/domain/Nullable';
import { TeamLeagueSeasonFixtureGameBoxScore } from '../TeamLeagueSeasonFixtureGameBoxScore';
import { TLSFGBoxScoreFixtureGameId } from '../value-objects/TLSFGBoxScoreFixtureGameId';

export interface ITeamLeagueSeasonFixtureGameBoxScoreRepository {
  save(teamLeagueSeasonFixtureGameBoxScore: TeamLeagueSeasonFixtureGameBoxScore): Promise<void>;
  findById(tLSFGBoxScoreFixtureGameId: TLSFGBoxScoreFixtureGameId): Promise<Nullable<TeamLeagueSeasonFixtureGameBoxScore>>;
}
