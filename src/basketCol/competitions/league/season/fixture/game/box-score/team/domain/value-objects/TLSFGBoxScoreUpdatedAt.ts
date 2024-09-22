import { FGBoxScoreUpdatedAt } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreUpdatedAt';

export class TLSFGBoxScoreUpdatedAt extends FGBoxScoreUpdatedAt {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TLSFGBoxScoreUpdatedAt {
    return new TLSFGBoxScoreUpdatedAt(value);
  }
}
