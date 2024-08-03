import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreOffensiveRebounds extends Metric {
  protected constructor(value: number) {
    super(value, 'offensiveRebounds');
  }
}
