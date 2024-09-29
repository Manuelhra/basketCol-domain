import { StatsTotalPoints } from '../../../../../shared/domain/value-objects/StatsTotalPoints';

export class PUCStatsTotalPoints extends StatsTotalPoints {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalPoints {
    return new PUCStatsTotalPoints(value);
  }
}
