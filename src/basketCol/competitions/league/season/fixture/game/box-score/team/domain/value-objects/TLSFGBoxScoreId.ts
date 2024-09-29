import { FGBoxScoreId } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreId';

export class TLSFGBoxScoreId extends FGBoxScoreId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TLSFGBoxScoreId {
    return new TLSFGBoxScoreId(value);
  }
}
