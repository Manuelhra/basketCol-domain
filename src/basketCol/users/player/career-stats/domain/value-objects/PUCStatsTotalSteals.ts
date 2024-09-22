import { StatsTotalSteals } from '../../../../../shared/domain/value-objects/StatsTotalSteals';

export class PUCStatsTotalSteals extends StatsTotalSteals {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalSteals {
    return new PUCStatsTotalSteals(value);
  }
}
