import { FGameQuarter } from '../../../../../../shared/domain/value-objects/FGameQuarter';

export class LSFGameQuarter extends FGameQuarter {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): LSFGameQuarter {
    return new LSFGameQuarter(value);
  }
}
