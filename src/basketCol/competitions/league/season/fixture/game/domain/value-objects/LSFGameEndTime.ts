import { FGameEndTime } from '../../../../../../shared/domain/value-objects/FGameEndTime';

export class LSFGameEndTime extends FGameEndTime {
  private constructor(value: string | null) {
    super(value);
  }

  public static create(value: string | null): LSFGameEndTime {
    return new LSFGameEndTime(value);
  }
}
