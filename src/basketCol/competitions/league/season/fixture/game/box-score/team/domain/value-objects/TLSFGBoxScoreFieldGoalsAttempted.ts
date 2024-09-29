import { FGBoxScoreFieldGoalsAttempted } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFieldGoalsAttempted';

export class TLSFGBoxScoreFieldGoalsAttempted extends FGBoxScoreFieldGoalsAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreFieldGoalsAttempted {
    return new TLSFGBoxScoreFieldGoalsAttempted(value);
  }
}
