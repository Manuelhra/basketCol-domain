import { FGameHeadRefereeId } from '../../../../../../shared/domain/value-objects/FGameHeadRefereeId';

export class LSFGameHeadRefereeId extends FGameHeadRefereeId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameHeadRefereeId {
    return new LSFGameHeadRefereeId(value);
  }
}
