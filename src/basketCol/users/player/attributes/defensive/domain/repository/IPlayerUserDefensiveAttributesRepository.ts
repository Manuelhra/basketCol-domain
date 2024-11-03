import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserDefensiveAttributes } from '../PlayerUserDefensiveAttributes';
import { PUDAId } from '../value-objects/PUDAId';

export interface IPlayerUserDefensiveAttributesRepository {
  save(playerUserDefensiveAttributes: PlayerUserDefensiveAttributes): Promise<void>;
  searchById(playerUserDefensiveAttributesId: PUDAId): Promise<Nullable<PlayerUserDefensiveAttributes>>;
}
