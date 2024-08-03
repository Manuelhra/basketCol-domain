import { Metric } from './Metric';

export abstract class StatsTotalSeasonsLeaguePlayed extends Metric {
  protected constructor(value: number) {
    super(value, 'totalSeasonsLeaguePlayed');
  }
}
