import { FGBoxScoreOffensiveRebounds } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreOffensiveRebounds';

export class TLSFGBoxScoreOffensiveRebounds extends FGBoxScoreOffensiveRebounds {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreOffensiveRebounds {
    return new TLSFGBoxScoreOffensiveRebounds(value);
  }
}
