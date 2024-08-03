import { Metric } from './Metric';

export abstract class StatsTotalGamesWon extends Metric {
  protected constructor(value: number) {
    super(value, 'totalGamesWon');
  }
}
