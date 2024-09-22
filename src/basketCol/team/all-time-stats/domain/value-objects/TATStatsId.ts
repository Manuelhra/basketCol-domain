import { StatsId } from '../../../../shared/domain/value-objects/StatsId';

export class TATStatsId extends StatsId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TATStatsId {
    return new TATStatsId(value);
  }
}
