import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreThreePointersAttempted extends Metric {
  protected constructor(value: number) {
    super(value, 'threePointersAttempted');
  }
}
