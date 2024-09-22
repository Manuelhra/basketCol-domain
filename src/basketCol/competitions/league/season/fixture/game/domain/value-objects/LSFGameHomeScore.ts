import { FGameHomeScore } from '../../../../../../shared/domain/value-objects/FGameHomeScore';

export class LSFGameHomeScore extends FGameHomeScore {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): LSFGameHomeScore {
    return new LSFGameHomeScore(value);
  }
}
