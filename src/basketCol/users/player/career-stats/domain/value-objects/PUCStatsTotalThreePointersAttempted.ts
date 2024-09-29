import { StatsTotalThreePointersAttempted } from '../../../../../shared/domain/value-objects/StatsTotalThreePointersAttempted';

export class PUCStatsTotalThreePointersAttempted extends StatsTotalThreePointersAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalThreePointersAttempted {
    return new PUCStatsTotalThreePointersAttempted(value);
  }
}
