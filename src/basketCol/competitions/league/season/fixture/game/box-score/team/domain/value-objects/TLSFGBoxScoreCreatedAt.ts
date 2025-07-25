import { FGBoxScoreCreatedAt } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreCreatedAt';

export class TLSFGBoxScoreCreatedAt extends FGBoxScoreCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TLSFGBoxScoreCreatedAt {
    return new TLSFGBoxScoreCreatedAt(value);
  }
}
