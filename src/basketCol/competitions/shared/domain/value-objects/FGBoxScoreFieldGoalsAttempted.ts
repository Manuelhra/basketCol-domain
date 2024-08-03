import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreFieldGoalsAttempted extends Metric {
  protected constructor(value: number) {
    super(value, 'fieldGoalsAttempted');
  }
}
