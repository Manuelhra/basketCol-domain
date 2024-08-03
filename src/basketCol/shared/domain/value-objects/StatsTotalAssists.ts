import { Metric } from './Metric';

export abstract class StatsTotalAssists extends Metric {
  protected constructor(value: number) {
    super(value, 'totalAssists');
  }
}
