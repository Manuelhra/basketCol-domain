import { FGameCourtId } from '../../../../../../shared/domain/value-objects/FGameCourtId';

export class LSFGameCourtId extends FGameCourtId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameCourtId {
    return new LSFGameCourtId(value);
  }
}
