import { Metric } from './Metric';

export abstract class StatsTotalFieldGoalsAttempted extends Metric {
  protected constructor(value: number) {
    super(value, 'totalFieldGoalsAttempted');
  }
}
