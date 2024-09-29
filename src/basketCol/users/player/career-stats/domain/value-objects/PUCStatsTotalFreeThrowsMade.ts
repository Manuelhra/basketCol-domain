import { StatsTotalFreeThrowsMade } from '../../../../../shared/domain/value-objects/StatsTotalFreeThrowsMade';

export class PUCStatsTotalFreeThrowsMade extends StatsTotalFreeThrowsMade {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalFreeThrowsMade {
    return new PUCStatsTotalFreeThrowsMade(value);
  }
}
