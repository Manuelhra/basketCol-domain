import { StatsTotalThreePointersAttempted } from '../../../../shared/domain/value-objects/StatsTotalThreePointersAttempted';

export class TATStatsTotalThreePointersAttempted extends StatsTotalThreePointersAttempted {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalThreePointersAttempted {
    return new TATStatsTotalThreePointersAttempted(value);
  }
}
