import { Metric } from './Metric';

export abstract class StatsTotalBlocks extends Metric {
  protected constructor(value: number) {
    super(value, 'totalBlocks');
  }
}
