import { ReferencedRefereeUserId } from '../../../../shared/domain/value-objects/ReferencedRefereeUser';

export abstract class FGameAssistantRefereeId extends ReferencedRefereeUserId {
  protected constructor(value: string) {
    super(value, 'assistantRefereeId');
  }
}
