import { FGBoxScoreThreePointersAttempted } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreThreePointersAttempted';

export class TLSFGBoxScoreThreePointersAttempted extends FGBoxScoreThreePointersAttempted {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreThreePointersAttempted {
    return new TLSFGBoxScoreThreePointersAttempted(value);
  }
}
