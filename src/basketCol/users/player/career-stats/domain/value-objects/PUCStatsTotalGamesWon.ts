import { StatsTotalGamesWon } from '../../../../../shared/domain/value-objects/StatsTotalGamesWon';

export class PUCStatsTotalGamesWon extends StatsTotalGamesWon {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalGamesWon {
    return new PUCStatsTotalGamesWon(value);
  }
}
