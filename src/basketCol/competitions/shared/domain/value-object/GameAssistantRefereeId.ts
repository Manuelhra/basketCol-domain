import { ReferencedRefereeUserId } from '../../../../shared/domain/value-objects/ReferencedRefereeUser';

export abstract class GameAssistantRefereeId extends ReferencedRefereeUserId {
  protected constructor(value: string) {
    super(value, 'assistantRefereeId');
  }
}
