import { PlayerUserCareerStats } from '../PlayerUserCareerStats';

export interface IPlayerUserCareerStatsRepository {
  save(playerUserCareerStats: PlayerUserCareerStats): Promise<void>;
}
