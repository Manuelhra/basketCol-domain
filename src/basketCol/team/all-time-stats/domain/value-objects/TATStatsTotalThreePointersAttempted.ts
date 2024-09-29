import { StatsTotalThreePointersAttempted } from '../../../../shared/domain/value-objects/StatsTotalThreePointersAttempted';

export class TATStatsTotalThreePointersAttempted extends StatsTotalThreePointersAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalThreePointersAttempted {
    return new TATStatsTotalThreePointersAttempted(value);
  }
}
