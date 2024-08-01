import { FGameEndTime } from '../../../../../../shared/domain/value-object/FGameEndTime';

export class LSFGameEndTime extends FGameEndTime {
  public constructor(value: string | undefined) {
    super(value);
  }
}
