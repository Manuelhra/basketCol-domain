import { StatsTotalGamesPlayed } from '../../../../shared/domain/value-objects/StatsTotalGamesPlayed';

export class TATStatsTotalGamesPlayed extends StatsTotalGamesPlayed {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalGamesPlayed {
    return new TATStatsTotalGamesPlayed(value);
  }
}
