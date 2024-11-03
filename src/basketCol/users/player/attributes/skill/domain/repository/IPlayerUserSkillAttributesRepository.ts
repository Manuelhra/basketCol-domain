import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserSkillAttributes } from '../PlayerUserSkillAttributes';
import { PUSAId } from '../value-objects/PUSAId';
import { PUSAReferencedPlayerUserId } from '../value-objects/PUSAReferencedPlayerUserId';

export interface IPlayerUserSkillAttributesRepository {
  save(playerUserSkillAttributes: PlayerUserSkillAttributes): Promise<void>;
  searchById(playerUserSkillAttributesId: PUSAId): Promise<Nullable<PlayerUserSkillAttributes>>;
  searchByPlayerUserId(pUSAReferencedPlayerUserId: PUSAReferencedPlayerUserId): Promise<Nullable<PlayerUserSkillAttributes>>;
}
