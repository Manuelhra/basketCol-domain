import { ReferencedTeamId } from '../../../../shared/domain/value-objects/ReferencedTeamId';

export class TATStatsTeamId extends ReferencedTeamId {
  public constructor(value: string) {
    super(value);
  }
}
