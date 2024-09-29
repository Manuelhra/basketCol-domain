import { StatsTotalSeasonsLeagueWon } from '../../../../../shared/domain/value-objects/StatsTotalSeasonsLeagueWon';

export class PUCStatsTotalSeasonsLeagueWon extends StatsTotalSeasonsLeagueWon {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalSeasonsLeagueWon {
    return new PUCStatsTotalSeasonsLeagueWon(value);
  }
}
