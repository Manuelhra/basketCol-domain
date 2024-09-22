import { FGBoxScoreBlocks } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreBlocks';

export class PLSFGBoxScoreBlocks extends FGBoxScoreBlocks {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreBlocks {
    return new PLSFGBoxScoreBlocks(value);
  }
}
