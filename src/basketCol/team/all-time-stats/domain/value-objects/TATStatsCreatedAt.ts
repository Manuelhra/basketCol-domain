import { StatsCreatedAt } from '../../../../shared/domain/value-objects/StatsCreatedAt';

export class TATStatsCreatedAt extends StatsCreatedAt {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TATStatsCreatedAt {
    return new TATStatsCreatedAt(value);
  }
}
