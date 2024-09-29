import { FGBoxScoreAssists } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreAssists';

export class TLSFGBoxScoreAssists extends FGBoxScoreAssists {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreAssists {
    return new TLSFGBoxScoreAssists(value);
  }
}
