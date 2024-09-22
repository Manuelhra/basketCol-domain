import { StatsCreatedAt } from '../../../../../shared/domain/value-objects/StatsCreatedAt';

export class PUCStatsCreatedAt extends StatsCreatedAt {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUCStatsCreatedAt {
    return new PUCStatsCreatedAt(value);
  }
}
