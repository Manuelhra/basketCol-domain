import { FGameEndTime } from '../../../../../../shared/domain/value-objects/FGameEndTime';

export class LSFGameEndTime extends FGameEndTime {
  public constructor(value: string | undefined) {
    super(value);
  }

  public static create(value: string | undefined): LSFGameEndTime {
    return new LSFGameEndTime(value);
  }
}
