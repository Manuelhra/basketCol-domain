import { Metric } from './Metric';

export abstract class StatsTotalSeasonsLeagueWon extends Metric {
  protected constructor(value: number) {
    super(value, 'totalSeasonsLeagueWon');
  }
}
