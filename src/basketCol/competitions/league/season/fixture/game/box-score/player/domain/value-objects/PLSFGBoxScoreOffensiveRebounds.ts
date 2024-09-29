import { FGBoxScoreOffensiveRebounds } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreOffensiveRebounds';

export class PLSFGBoxScoreOffensiveRebounds extends FGBoxScoreOffensiveRebounds {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreOffensiveRebounds {
    return new PLSFGBoxScoreOffensiveRebounds(value);
  }
}
