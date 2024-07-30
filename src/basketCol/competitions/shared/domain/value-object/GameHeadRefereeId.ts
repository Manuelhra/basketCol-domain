import { ReferencedRefereeUserId } from '../../../../shared/domain/value-objects/ReferencedRefereeUser';

export abstract class GameHeadRefereeId extends ReferencedRefereeUserId {
  protected constructor(value: string) {
    super(value, 'headRefereeId');
  }
}
