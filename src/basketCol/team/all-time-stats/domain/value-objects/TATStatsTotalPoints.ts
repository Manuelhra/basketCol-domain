import { StatsTotalPoints } from '../../../../shared/domain/value-objects/StatsTotalPoints';

export class TATStatsTotalPoints extends StatsTotalPoints {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalPoints {
    return new TATStatsTotalPoints(value);
  }
}
