import { FGBoxScoreId } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreId';

export class PLSFGBoxScoreId extends FGBoxScoreId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PLSFGBoxScoreId {
    return new PLSFGBoxScoreId(value);
  }
}
