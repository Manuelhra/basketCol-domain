import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreFreeThrowsMade extends Metric {
  protected constructor(value: number) {
    super(value, 'freeThrowsMade');
  }
}
