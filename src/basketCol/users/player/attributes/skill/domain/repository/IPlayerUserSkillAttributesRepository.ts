import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserSkillAttributes } from '../PlayerUserSkillAttributes';
import { PUSAId } from '../value-objects/PUSAId';
import { PUSAReferencedPlayerUserId } from '../value-objects/PUSAReferencedPlayerUserId';

export interface IPlayerUserSkillAttributesRepository {
  save(playerUserSkillAttributes: PlayerUserSkillAttributes): Promise<void>;
  findById(playerUserSkillAttributesId: PUSAId): Promise<Nullable<PlayerUserSkillAttributes>>;
  findByPlayerUserId(pUSAReferencedPlayerUserId: PUSAReferencedPlayerUserId): Promise<Nullable<PlayerUserSkillAttributes>>;
}
