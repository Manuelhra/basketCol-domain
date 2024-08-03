import { Metric } from './Metric';

export abstract class StatsTotalGamesPlayed extends Metric {
  protected constructor(value: number) {
    super(value, 'totalGamesPlayed');
  }
}
