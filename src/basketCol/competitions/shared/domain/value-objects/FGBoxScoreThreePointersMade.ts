import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreThreePointersMade extends Metric {
  protected constructor(value: number) {
    super(value, 'threePointersMade');
  }
}
