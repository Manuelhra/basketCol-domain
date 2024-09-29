import { FGBoxScoreCreatedAt } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreCreatedAt';

export class PLSFGBoxScoreCreatedAt extends FGBoxScoreCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PLSFGBoxScoreCreatedAt {
    return new PLSFGBoxScoreCreatedAt(value);
  }
}
