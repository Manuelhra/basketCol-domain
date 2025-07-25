import { FGBoxScoreBlocks } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreBlocks';

export class TLSFGBoxScoreBlocks extends FGBoxScoreBlocks {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreBlocks {
    return new TLSFGBoxScoreBlocks(value);
  }
}
