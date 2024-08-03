import { Metric } from './Metric';

export abstract class StatsTotalDefensiveRebounds extends Metric {
  protected constructor(value: number) {
    super(value, 'totalDefensiveRebounds');
  }
}
