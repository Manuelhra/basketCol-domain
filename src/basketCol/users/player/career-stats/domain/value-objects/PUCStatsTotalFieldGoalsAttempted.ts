import { StatsTotalFieldGoalsAttempted } from '../../../../../shared/domain/value-objects/StatsTotalFieldGoalsAttempted';

export class PUCStatsTotalFieldGoalsAttempted extends StatsTotalFieldGoalsAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalFieldGoalsAttempted {
    return new PUCStatsTotalFieldGoalsAttempted(value);
  }
}
