import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserShootingAttributes } from '../PlayerUserShootingAttributes';
import { PUSAId } from '../value-objects/PUSAId';

export interface IPlayerUserShootingAttributesRepository {
  save(playerUserShootingAttributes: PlayerUserShootingAttributes): Promise<void>;
  searchById(playerUserShootingAttributesId: PUSAId): Promise<Nullable<PlayerUserShootingAttributes>>;
}
