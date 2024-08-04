import { TeamAllTimeStats } from '../TeamAllTimeStats';

export interface TeamAllTimeStatsRepository {
  save(teamAllTimeStats: TeamAllTimeStats): Promise<void>;
}
