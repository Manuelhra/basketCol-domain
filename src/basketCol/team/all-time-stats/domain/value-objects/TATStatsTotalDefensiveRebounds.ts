import { StatsTotalDefensiveRebounds } from '../../../../shared/domain/value-objects/StatsTotalDefensiveRebounds';

export class TATStatsTotalDefensiveRebounds extends StatsTotalDefensiveRebounds {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalDefensiveRebounds {
    return new TATStatsTotalDefensiveRebounds(value);
  }
}
