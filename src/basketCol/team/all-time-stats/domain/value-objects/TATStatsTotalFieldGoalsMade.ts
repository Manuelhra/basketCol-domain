import { StatsTotalFieldGoalsMade } from '../../../../shared/domain/value-objects/StatsTotalFieldGoalsMade';

export class TATStatsTotalFieldGoalsMade extends StatsTotalFieldGoalsMade {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalFieldGoalsMade {
    return new TATStatsTotalFieldGoalsMade(value);
  }
}
