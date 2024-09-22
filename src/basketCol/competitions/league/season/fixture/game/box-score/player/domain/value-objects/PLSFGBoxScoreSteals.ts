import { FGBoxScoreSteals } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreSteals';

export class PLSFGBoxScoreSteals extends FGBoxScoreSteals {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreSteals {
    return new PLSFGBoxScoreSteals(value);
  }
}
