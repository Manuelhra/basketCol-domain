import { Metric } from '../../../../shared/domain/value-objects/Metric';

export abstract class FGBoxScoreTurnovers extends Metric {
  protected constructor(value: number) {
    super(value, 'turnovers');
  }
}
