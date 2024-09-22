import { FGameReferencedCourtId } from '../../../../../../shared/domain/value-objects/FGameReferencedCourtId';

export class LSFGameCourtId extends FGameReferencedCourtId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameCourtId {
    return new LSFGameCourtId(value);
  }
}
