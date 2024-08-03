import { Metric } from './Metric';

export abstract class StatsTotalOffensiveRebounds extends Metric {
  protected constructor(value: number) {
    super(value, 'totalOffensiveRebounds');
  }
}
