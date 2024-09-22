import { StatsTotalFreeThrowsMade } from '../../../../shared/domain/value-objects/StatsTotalFreeThrowsMade';

export class TATStatsTotalFreeThrowsMade extends StatsTotalFreeThrowsMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalFreeThrowsMade {
    return new TATStatsTotalFreeThrowsMade(value);
  }
}
