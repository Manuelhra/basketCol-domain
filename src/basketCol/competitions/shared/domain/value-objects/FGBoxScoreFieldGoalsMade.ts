import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreFieldGoalsMade extends Metric {
  protected constructor(value: number) {
    super(value, 'fieldGoalsMade');
  }
}
