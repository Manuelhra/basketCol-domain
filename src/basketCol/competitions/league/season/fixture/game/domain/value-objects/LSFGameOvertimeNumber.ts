import { FGameOvertimeNumber } from '../../../../../../shared/domain/value-objects/FGameOvertimeNumber';

export class LSFGameOvertimeNumber extends FGameOvertimeNumber {
  private constructor(value: number | null) {
    super(value);
  }

  public static create(value: number | null): LSFGameOvertimeNumber {
    return new LSFGameOvertimeNumber(value);
  }
}
