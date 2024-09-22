import { FGBoxScoreThreePointersAttempted } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreThreePointersAttempted';

export class PLSFGBoxScoreThreePointersAttempted extends FGBoxScoreThreePointersAttempted {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreThreePointersAttempted {
    return new PLSFGBoxScoreThreePointersAttempted(value);
  }
}
