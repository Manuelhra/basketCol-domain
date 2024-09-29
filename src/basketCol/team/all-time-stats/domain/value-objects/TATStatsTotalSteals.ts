import { StatsTotalSteals } from '../../../../shared/domain/value-objects/StatsTotalSteals';

export class TATStatsTotalSteals extends StatsTotalSteals {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalSteals {
    return new TATStatsTotalSteals(value);
  }
}
