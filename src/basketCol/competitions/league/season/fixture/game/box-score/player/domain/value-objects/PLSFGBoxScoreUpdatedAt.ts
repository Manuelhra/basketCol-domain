import { FGBoxScoreUpdatedAt } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreUpdatedAt';

export class PLSFGBoxScoreUpdatedAt extends FGBoxScoreUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PLSFGBoxScoreUpdatedAt {
    return new PLSFGBoxScoreUpdatedAt(value);
  }
}
