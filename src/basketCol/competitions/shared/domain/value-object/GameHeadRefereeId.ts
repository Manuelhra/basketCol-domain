import { ReferencedRefereeUserId } from '../../../../shared/domain/value-objects/ReferencedRefereeUser';
import { SameRefereeError } from '../exceptions/SameRefereeError';

export abstract class GameHeadRefereeId extends ReferencedRefereeUserId {
  protected constructor(value: string) {
    super(value, 'headRefereeId');
  }

  public ensureDifferentReferees(assistantRefereeId: string): void {
    if (this.value.value === assistantRefereeId) {
      throw new SameRefereeError(this.value.value);
    }
  }
}
