import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class TATStatsTeamId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TATStatsTeamId {
    return new TATStatsTeamId(value);
  }
}
