import { StatsUpdatedAt } from '../../../../../shared/domain/value-objects/StatsUpdatedAt';

export class PUCStatsUpdatedAt extends StatsUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUCStatsUpdatedAt {
    return new PUCStatsUpdatedAt(value);
  }
}
