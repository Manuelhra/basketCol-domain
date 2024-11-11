import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserDefensiveAttributes } from '../PlayerUserDefensiveAttributes';
import { PUDAId } from '../value-objects/PUDAId';
import { PUDAPlayerUserId } from '../value-objects/PUDAPlayerUserId';

export interface IPlayerUserDefensiveAttributesRepository {
  save(playerUserDefensiveAttributes: PlayerUserDefensiveAttributes): Promise<void>;
  findById(playerUserDefensiveAttributesId: PUDAId): Promise<Nullable<PlayerUserDefensiveAttributes>>;
  findByPlayerUserId(pUDAPlayerUserId: PUDAPlayerUserId): Promise<Nullable<PlayerUserDefensiveAttributes>>;
}
