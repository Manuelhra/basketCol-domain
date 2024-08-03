import { Metric } from './Metric';

export abstract class StatsTotalFreeThrowsAttempted extends Metric {
  protected constructor(value: number) {
    super(value, 'totalFreeThrowsAttempted');
  }
}
