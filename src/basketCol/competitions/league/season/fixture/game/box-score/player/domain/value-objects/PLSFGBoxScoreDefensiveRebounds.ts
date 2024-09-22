import { FGBoxScoreDefensiveRebounds } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreDefensiveRebounds';

export class PLSFGBoxScoreDefensiveRebounds extends FGBoxScoreDefensiveRebounds {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreDefensiveRebounds {
    return new PLSFGBoxScoreDefensiveRebounds(value);
  }
}
