import { Metric } from './Metric';

export abstract class StatsTotalThreePointersAttempted extends Metric {
  protected constructor(value: number) {
    super(value, 'totalThreePointersAttempted');
  }
}
