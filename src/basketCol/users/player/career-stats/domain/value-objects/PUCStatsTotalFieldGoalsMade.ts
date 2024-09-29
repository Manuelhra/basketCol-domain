import { StatsTotalFieldGoalsMade } from '../../../../../shared/domain/value-objects/StatsTotalFieldGoalsMade';

export class PUCStatsTotalFieldGoalsMade extends StatsTotalFieldGoalsMade {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalFieldGoalsMade {
    return new PUCStatsTotalFieldGoalsMade(value);
  }
}
