import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserPhysicalAttributes } from '../PlayerUserPhysicalAttributes';
import { PUPAId } from '../value-objects/PUPAId';
import { PUPAReferencedPlayerUserId } from '../value-objects/PUPAReferencedPlayerUserId';

export interface IPlayerUserPhysicalAttributesRepository {
  save(playerUserPhysicalAttributes: PlayerUserPhysicalAttributes): Promise<void>;
  searchById(playerUserPhysicalAttributesId: PUPAId): Promise<Nullable<PlayerUserPhysicalAttributes>>;
  searchByPlayerUserId(pUPAReferencedPlayerUserId: PUPAReferencedPlayerUserId): Promise<Nullable<PlayerUserPhysicalAttributes>>;
}
