import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreSteals extends Metric {
  protected constructor(value: number) {
    super(value, 'steals');
  }
}
