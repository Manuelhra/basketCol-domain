import { FGameQuarter } from '../../../../../../shared/domain/value-objects/FGameQuarter';

export class LSFGameQuarter extends FGameQuarter {
  private constructor(value: number | null) {
    super(value);
  }

  public static create(value: number | null): LSFGameQuarter {
    return new LSFGameQuarter(value);
  }
}
