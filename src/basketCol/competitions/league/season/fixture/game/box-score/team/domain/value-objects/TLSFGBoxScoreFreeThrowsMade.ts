import { FGBoxScoreFreeThrowsMade } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFreeThrowsMade';

export class TLSFGBoxScoreFreeThrowsMade extends FGBoxScoreFreeThrowsMade {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreFreeThrowsMade {
    return new TLSFGBoxScoreFreeThrowsMade(value);
  }
}
