import { StatsTotalGamesPlayed } from '../../../../../shared/domain/value-objects/StatsTotalGamesPlayed';

export class PUCStatsTotalGamesPlayed extends StatsTotalGamesPlayed {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalGamesPlayed {
    return new PUCStatsTotalGamesPlayed(value);
  }
}
