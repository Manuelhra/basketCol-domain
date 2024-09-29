import { FGBoxScoreFieldGoalsMade } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFieldGoalsMade';

export class PLSFGBoxScoreFieldGoalsMade extends FGBoxScoreFieldGoalsMade {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreFieldGoalsMade {
    return new PLSFGBoxScoreFieldGoalsMade(value);
  }
}
