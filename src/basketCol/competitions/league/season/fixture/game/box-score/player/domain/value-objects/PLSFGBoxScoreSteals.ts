import { FGBoxScoreSteals } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreSteals';

export class PLSFGBoxScoreSteals extends FGBoxScoreSteals {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreSteals {
    return new PLSFGBoxScoreSteals(value);
  }
}
