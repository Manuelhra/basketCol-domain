import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserSkillAttributes } from '../PlayerUserSkillAttributes';
import { PUSAId } from '../value-objects/PUSAId';

export interface IPlayerUserSkillAttributesRepository {
  save(playerUserSkillAttributes: PlayerUserSkillAttributes): Promise<void>;
  searchById(playerUserSkillAttributesId: PUSAId): Promise<Nullable<PlayerUserSkillAttributes>>;
}
