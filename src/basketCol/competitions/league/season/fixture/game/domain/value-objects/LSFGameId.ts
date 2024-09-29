import { FGameId } from '../../../../../../shared/domain/value-objects/FGameId';

export class LSFGameId extends FGameId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameId {
    return new LSFGameId(value);
  }
}
