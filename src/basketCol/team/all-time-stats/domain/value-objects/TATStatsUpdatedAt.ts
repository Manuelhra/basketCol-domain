import { StatsUpdatedAt } from '../../../../shared/domain/value-objects/StatsUpdatedAt';

export class TATStatsUpdatedAt extends StatsUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
