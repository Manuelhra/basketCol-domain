import { StatsTotalGamesWon } from '../../../../shared/domain/value-objects/StatsTotalGamesWon';

export class TATStatsTotalGamesWon extends StatsTotalGamesWon {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalGamesWon {
    return new TATStatsTotalGamesWon(value);
  }
}
