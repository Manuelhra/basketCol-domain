import { FGBoxScoreId } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreId';

export class TLSFGBoxScoreId extends FGBoxScoreId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TLSFGBoxScoreId {
    return new TLSFGBoxScoreId(value);
  }
}
