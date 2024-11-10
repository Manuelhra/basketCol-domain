import { FGameStatus } from '../../../../../../shared/domain/value-objects/FGameStatus';

export class LSFGameStatus extends FGameStatus {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameStatus {
    return new LSFGameStatus(value);
  }

  public static createUpcoming(): LSFGameStatus {
    return new LSFGameStatus('UPCOMING');
  }
}
