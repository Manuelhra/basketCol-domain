import { FGBoxScoreDefensiveRebounds } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreDefensiveRebounds';

export class TLSFGBoxScoreDefensiveRebounds extends FGBoxScoreDefensiveRebounds {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreDefensiveRebounds {
    return new TLSFGBoxScoreDefensiveRebounds(value);
  }
}
