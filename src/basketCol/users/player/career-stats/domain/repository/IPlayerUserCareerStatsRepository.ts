import { Nullable } from '../../../../../shared/domain/Nullable';
import { PlayerUserCareerStats } from '../PlayerUserCareerStats';
import { PUCStatsId } from '../value-objects';

export interface IPlayerUserCareerStatsRepository {
  save(playerUserCareerStats: PlayerUserCareerStats): Promise<void>;
  searchById(pUCStatsId: PUCStatsId): Promise<Nullable<PlayerUserCareerStats>>;
}
