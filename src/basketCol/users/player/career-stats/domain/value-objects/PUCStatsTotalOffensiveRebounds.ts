import { StatsTotalOffensiveRebounds } from '../../../../../shared/domain/value-objects/StatsTotalOffensiveRebounds';

export class PUCStatsTotalOffensiveRebounds extends StatsTotalOffensiveRebounds {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalOffensiveRebounds {
    return new PUCStatsTotalOffensiveRebounds(value);
  }
}
