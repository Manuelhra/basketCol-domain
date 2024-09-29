import { FGBoxScoreBlocks } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreBlocks';

export class PLSFGBoxScoreBlocks extends FGBoxScoreBlocks {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreBlocks {
    return new PLSFGBoxScoreBlocks(value);
  }
}
