import { StatsTotalThreePointersMade } from '../../../../../shared/domain/value-objects/StatsTotalThreePointersMade';

export class PUCStatsTotalThreePointersMade extends StatsTotalThreePointersMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalThreePointersMade {
    return new PUCStatsTotalThreePointersMade(value);
  }
}
