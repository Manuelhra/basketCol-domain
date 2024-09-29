import { StatsTotalSteals } from '../../../../../shared/domain/value-objects/StatsTotalSteals';

export class PUCStatsTotalSteals extends StatsTotalSteals {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalSteals {
    return new PUCStatsTotalSteals(value);
  }
}
