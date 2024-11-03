import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserPhysicalAttributes } from '../PlayerUserPhysicalAttributes';
import { PUPAId } from '../value-objects/PUPAId';

export interface IPlayerUserPhysicalAttributesRepository {
  save(playerUserPhysicalAttributes: PlayerUserPhysicalAttributes): Promise<void>;
  searchById(playerUserPhysicalAttributesId: PUPAId): Promise<Nullable<PlayerUserPhysicalAttributes>>;
}
