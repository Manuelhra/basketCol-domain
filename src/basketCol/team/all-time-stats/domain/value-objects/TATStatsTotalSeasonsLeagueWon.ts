import { StatsTotalSeasonsLeagueWon } from '../../../../shared/domain/value-objects/StatsTotalSeasonsLeagueWon';

export class TATStatsTotalSeasonsLeagueWon extends StatsTotalSeasonsLeagueWon {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalSeasonsLeagueWon {
    return new TATStatsTotalSeasonsLeagueWon(value);
  }
}
