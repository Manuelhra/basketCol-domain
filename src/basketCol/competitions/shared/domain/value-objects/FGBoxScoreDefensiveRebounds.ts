import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreDefensiveRebounds extends Metric {
  protected constructor(value: number) {
    super(value, 'defensiveRebounds');
  }
}
