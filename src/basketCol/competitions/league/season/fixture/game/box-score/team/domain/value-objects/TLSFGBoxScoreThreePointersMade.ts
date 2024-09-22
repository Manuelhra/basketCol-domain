import { FGBoxScoreThreePointersMade } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreThreePointersMade';

export class TLSFGBoxScoreThreePointersMade extends FGBoxScoreThreePointersMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreThreePointersMade {
    return new TLSFGBoxScoreThreePointersMade(value);
  }
}
