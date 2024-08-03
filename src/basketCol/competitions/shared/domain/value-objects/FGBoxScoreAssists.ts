import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreAssists extends Metric {
  protected constructor(value: number) {
    super(value, 'assists');
  }
}
