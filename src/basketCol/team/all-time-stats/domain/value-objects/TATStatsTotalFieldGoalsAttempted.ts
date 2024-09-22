import { StatsTotalFieldGoalsAttempted } from '../../../../shared/domain/value-objects/StatsTotalFieldGoalsAttempted';

export class TATStatsTotalFieldGoalsAttempted extends StatsTotalFieldGoalsAttempted {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalFieldGoalsAttempted {
    return new TATStatsTotalFieldGoalsAttempted(value);
  }
}
