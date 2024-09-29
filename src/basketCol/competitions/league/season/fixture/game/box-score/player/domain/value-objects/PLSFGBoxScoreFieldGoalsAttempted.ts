import { FGBoxScoreFieldGoalsAttempted } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFieldGoalsAttempted';

export class PLSFGBoxScoreFieldGoalsAttempted extends FGBoxScoreFieldGoalsAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreFieldGoalsAttempted {
    return new PLSFGBoxScoreFieldGoalsAttempted(value);
  }
}
