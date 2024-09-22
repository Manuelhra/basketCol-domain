import { FGameDuration } from '../../../../../../shared/domain/value-objects/FGameDuration';

export class LSFGameDuration extends FGameDuration {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): LSFGameDuration {
    return new LSFGameDuration(value);
  }
}
