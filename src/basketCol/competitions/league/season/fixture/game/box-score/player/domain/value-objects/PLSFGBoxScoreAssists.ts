import { FGBoxScoreAssists } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreAssists';

export class PLSFGBoxScoreAssists extends FGBoxScoreAssists {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreAssists {
    return new PLSFGBoxScoreAssists(value);
  }
}
