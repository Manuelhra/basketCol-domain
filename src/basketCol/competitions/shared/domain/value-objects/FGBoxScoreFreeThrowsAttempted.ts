import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreFreeThrowsAttempted extends Metric {
  protected constructor(value: number) {
    super(value, 'freeThrowsAttempted');
  }
}
