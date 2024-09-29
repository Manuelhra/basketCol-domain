import { FGameStartTime } from '../../../../../../shared/domain/value-objects/FGameStartTime';

export class LSFGameStartTime extends FGameStartTime {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameStartTime {
    return new LSFGameStartTime(value);
  }
}
