import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreBlocks extends Metric {
  protected constructor(value: number) {
    super(value, 'blocks');
  }
}
