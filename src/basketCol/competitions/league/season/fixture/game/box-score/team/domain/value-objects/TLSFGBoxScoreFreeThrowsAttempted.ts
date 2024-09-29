import { FGBoxScoreFreeThrowsAttempted } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFreeThrowsAttempted';

export class TLSFGBoxScoreFreeThrowsAttempted extends FGBoxScoreFreeThrowsAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreFreeThrowsAttempted {
    return new TLSFGBoxScoreFreeThrowsAttempted(value);
  }
}
