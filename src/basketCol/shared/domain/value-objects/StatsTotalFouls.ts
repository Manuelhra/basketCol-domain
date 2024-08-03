import { Metric } from './Metric';

export abstract class StatsTotalFouls extends Metric {
  protected constructor(value: number) {
    super(value, 'totalFouls');
  }
}
