import { Metric } from './Metric';

export abstract class StatsTotalTurnovers extends Metric {
  protected constructor(value: number) {
    super(value, 'totalTurnovers');
  }
}
