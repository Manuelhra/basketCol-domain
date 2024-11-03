import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserDefensiveAttributes } from '../PlayerUserDefensiveAttributes';
import { PUDAId } from '../value-objects/PUDAId';
import { PUDAReferencedPlayerUserId } from '../value-objects/PUDAReferencedPlayerUserId';

export interface IPlayerUserDefensiveAttributesRepository {
  save(playerUserDefensiveAttributes: PlayerUserDefensiveAttributes): Promise<void>;
  searchById(playerUserDefensiveAttributesId: PUDAId): Promise<Nullable<PlayerUserDefensiveAttributes>>;
  searchByPlayerUserId(pUDAReferencedPlayerUserId: PUDAReferencedPlayerUserId): Promise<Nullable<PlayerUserDefensiveAttributes>>;
}
