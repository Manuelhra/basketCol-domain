import { StatsUpdatedAt } from '../../../../shared/domain/value-objects/StatsUpdatedAt';

export class TATStatsUpdatedAt extends StatsUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TATStatsUpdatedAt {
    return new TATStatsUpdatedAt(value);
  }
}
