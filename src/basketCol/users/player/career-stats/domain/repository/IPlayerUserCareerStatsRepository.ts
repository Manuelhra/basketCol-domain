import { Nullable } from '../../../../../shared/domain/Nullable';
import { PlayerUserCareerStats } from '../PlayerUserCareerStats';
import { PUCStatsId } from '../value-objects/PUCStatsId';
import { PUCStatsPlayerUserId } from '../value-objects/PUCStatsPlayerUserId';

export interface IPlayerUserCareerStatsRepository {
  save(playerUserCareerStats: PlayerUserCareerStats): Promise<void>;
  update(playerUserCareerStats: PlayerUserCareerStats): Promise<void>;
  findById(pUCStatsId: PUCStatsId): Promise<Nullable<PlayerUserCareerStats>>;
  findByPlayerUserId(playerUserId: PUCStatsPlayerUserId): Promise<Nullable<PlayerUserCareerStats>>;
}
