import { Metric } from './Metric';

export abstract class StatsTotalFieldGoalsMade extends Metric {
  protected constructor(value: number) {
    super(value, 'totalFieldGoalsMade');
  }
}
