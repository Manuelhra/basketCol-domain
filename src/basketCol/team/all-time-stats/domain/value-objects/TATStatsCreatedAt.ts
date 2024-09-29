import { StatsCreatedAt } from '../../../../shared/domain/value-objects/StatsCreatedAt';

export class TATStatsCreatedAt extends StatsCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TATStatsCreatedAt {
    return new TATStatsCreatedAt(value);
  }
}
