import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserSkillAttributes } from '../PlayerUserSkillAttributes';
import { PUSAId } from '../value-objects/PUSAId';
import { PUSAPlayerUserId } from '../value-objects/PUSAPlayerUserId';

export interface IPlayerUserSkillAttributesRepository {
  save(playerUserSkillAttributes: PlayerUserSkillAttributes): Promise<void>;
  findById(playerUserSkillAttributesId: PUSAId): Promise<Nullable<PlayerUserSkillAttributes>>;
  findByPlayerUserId(pUSAPlayerUserId: PUSAPlayerUserId): Promise<Nullable<PlayerUserSkillAttributes>>;
}
