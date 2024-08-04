import { StatsUpdatedAt } from '../../../../../shared/domain/value-objects/StatsUpdatedAt';

export class PUCStatsUpdatedAt extends StatsUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
