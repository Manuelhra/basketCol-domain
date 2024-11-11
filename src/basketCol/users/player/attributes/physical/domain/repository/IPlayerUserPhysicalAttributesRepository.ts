import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserPhysicalAttributes } from '../PlayerUserPhysicalAttributes';
import { PUPAId } from '../value-objects/PUPAId';
import { PUPAPlayerUserId } from '../value-objects/PUPAPlayerUserId';

export interface IPlayerUserPhysicalAttributesRepository {
  save(playerUserPhysicalAttributes: PlayerUserPhysicalAttributes): Promise<void>;
  findById(playerUserPhysicalAttributesId: PUPAId): Promise<Nullable<PlayerUserPhysicalAttributes>>;
  findByPlayerUserId(pUPAPlayerUserId: PUPAPlayerUserId): Promise<Nullable<PlayerUserPhysicalAttributes>>;
}
