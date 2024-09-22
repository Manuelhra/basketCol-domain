import { StatsTotalThreePointersMade } from '../../../../shared/domain/value-objects/StatsTotalThreePointersMade';

export class TATStatsTotalThreePointersMade extends StatsTotalThreePointersMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalThreePointersMade {
    return new TATStatsTotalThreePointersMade(value);
  }
}
