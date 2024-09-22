import { FGBoxScoreFreeThrowsMade } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFreeThrowsMade';

export class PLSFGBoxScoreFreeThrowsMade extends FGBoxScoreFreeThrowsMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreFreeThrowsMade {
    return new PLSFGBoxScoreFreeThrowsMade(value);
  }
}
