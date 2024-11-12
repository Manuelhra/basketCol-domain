import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamAllTimeStats } from '../TeamAllTimeStats';
import { TATStatsId } from '../value-objects/TATStatsId';

export interface ITeamAllTimeStatsRepository {
  save(teamAllTimeStats: TeamAllTimeStats): Promise<void>;
  findById(teamAllTimeStatsId: TATStatsId): Promise<Nullable<TeamAllTimeStats>>;
}
