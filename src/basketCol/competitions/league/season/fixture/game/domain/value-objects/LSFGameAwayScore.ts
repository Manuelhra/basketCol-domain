import { FGameAwayScore } from '../../../../../../shared/domain/value-objects/FGameAwayScore';

export class LSFGameAwayScore extends FGameAwayScore {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): LSFGameAwayScore {
    return new LSFGameAwayScore(value);
  }
}
