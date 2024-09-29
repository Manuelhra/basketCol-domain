import { StatsTotalFieldGoalsAttempted } from '../../../../shared/domain/value-objects/StatsTotalFieldGoalsAttempted';

export class TATStatsTotalFieldGoalsAttempted extends StatsTotalFieldGoalsAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalFieldGoalsAttempted {
    return new TATStatsTotalFieldGoalsAttempted(value);
  }
}
