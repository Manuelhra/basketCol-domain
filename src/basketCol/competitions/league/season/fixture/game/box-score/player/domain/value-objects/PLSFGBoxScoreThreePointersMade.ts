import { FGBoxScoreThreePointersMade } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreThreePointersMade';

export class PLSFGBoxScoreThreePointersMade extends FGBoxScoreThreePointersMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreThreePointersMade {
    return new PLSFGBoxScoreThreePointersMade(value);
  }
}
