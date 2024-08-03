import { Metric } from './Metric';

export abstract class StatsTotalThreePointersMade extends Metric {
  protected constructor(value: number) {
    super(value, 'totalThreePointersMade');
  }
}
