import { Metric } from './Metric';

export abstract class StatsTotalPoints extends Metric {
  protected constructor(value: number) {
    super(value, 'totalPoints');
  }
}
