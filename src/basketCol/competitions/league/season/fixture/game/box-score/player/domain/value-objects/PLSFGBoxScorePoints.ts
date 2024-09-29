import { FGBoxScorePoints } from '../../../../../../../../shared/domain/value-objects/FGBoxScorePoints';

export class PLSFGBoxScorePoints extends FGBoxScorePoints {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScorePoints {
    return new PLSFGBoxScorePoints(value);
  }
}
