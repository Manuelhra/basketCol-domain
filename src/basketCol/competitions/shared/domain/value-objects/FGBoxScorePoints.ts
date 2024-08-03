import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScorePoints extends Metric {
  protected constructor(value: number) {
    super(value, 'points');
  }
}
