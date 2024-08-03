import { Metric } from './Metric';

export abstract class StatsTotalFreeThrowsMade extends Metric {
  protected constructor(value: number) {
    super(value, 'totalFreeThrowsMade');
  }
}
