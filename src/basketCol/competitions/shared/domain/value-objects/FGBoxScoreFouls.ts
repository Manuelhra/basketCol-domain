import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreFouls extends Metric {
  protected constructor(value: number) {
    super(value, 'fouls');
  }
}
