import { StatsTotalOffensiveRebounds } from '../../../../shared/domain/value-objects/StatsTotalOffensiveRebounds';

export class TATStatsTotalOffensiveRebounds extends StatsTotalOffensiveRebounds {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalOffensiveRebounds {
    return new TATStatsTotalOffensiveRebounds(value);
  }
}
