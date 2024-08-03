import { Metric } from './Metric';

export abstract class StatsTotalSteals extends Metric {
  protected constructor(value: number) {
    super(value, 'totalSteals');
  }
}
