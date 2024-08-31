import { ReferencedRefereeUserId } from '../../../../shared/domain/value-objects/ReferencedRefereeUserId';

export abstract class FGameHeadRefereeId extends ReferencedRefereeUserId {
  protected constructor(value: string) {
    super(value, 'headRefereeId');
  }
}
