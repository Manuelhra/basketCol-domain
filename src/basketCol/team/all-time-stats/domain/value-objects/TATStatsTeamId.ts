import { ReferencedTeamId } from '../../../../shared/domain/value-objects/ReferencedTeamId';

export class TATStatsTeamId extends ReferencedTeamId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TATStatsTeamId {
    return new TATStatsTeamId(value);
  }
}
