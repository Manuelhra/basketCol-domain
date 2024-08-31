import { PlayerUserPhysicalAttributes } from '../PlayerUserPhysicalAttributes';

export interface IPlayerUserPhysicalAttributesRepository {
  save(playerUserPhysicalAttributes: PlayerUserPhysicalAttributes): Promise<void>;
}
