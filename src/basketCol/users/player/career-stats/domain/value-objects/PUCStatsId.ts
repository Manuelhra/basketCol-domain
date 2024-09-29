import { StatsId } from '../../../../../shared/domain/value-objects/StatsId';

export class PUCStatsId extends StatsId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUCStatsId {
    return new PUCStatsId(value);
  }
}
