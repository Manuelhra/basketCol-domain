import { TeamAllTimeStats } from '../TeamAllTimeStats';

export interface ITeamAllTimeStatsRepository {
  save(teamAllTimeStats: TeamAllTimeStats): Promise<void>;
}
