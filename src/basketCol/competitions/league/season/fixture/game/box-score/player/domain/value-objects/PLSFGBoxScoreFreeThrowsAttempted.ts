import { FGBoxScoreFreeThrowsAttempted } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFreeThrowsAttempted';

export class PLSFGBoxScoreFreeThrowsAttempted extends FGBoxScoreFreeThrowsAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreFreeThrowsAttempted {
    return new PLSFGBoxScoreFreeThrowsAttempted(value);
  }
}
