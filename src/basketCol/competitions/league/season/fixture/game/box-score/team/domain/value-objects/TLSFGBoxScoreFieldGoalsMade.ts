import { FGBoxScoreFieldGoalsMade } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFieldGoalsMade';

export class TLSFGBoxScoreFieldGoalsMade extends FGBoxScoreFieldGoalsMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreFieldGoalsMade {
    return new TLSFGBoxScoreFieldGoalsMade(value);
  }
}
