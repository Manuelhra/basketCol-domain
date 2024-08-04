import { PlayerUserCareerStats } from '../PlayerUserCareerStats';

export interface PlayerUserCareerStatsRepository {
  save(playerUserCareerStats: PlayerUserCareerStats): Promise<void>;
}
