import { StatsTotalDefensiveRebounds } from '../../../../../shared/domain/value-objects/StatsTotalDefensiveRebounds';

export class PUCStatsTotalDefensiveRebounds extends StatsTotalDefensiveRebounds {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalDefensiveRebounds {
    return new PUCStatsTotalDefensiveRebounds(value);
  }
}
