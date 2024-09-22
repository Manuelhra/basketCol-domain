import { ReferencedTeamId } from '../../../../../../../../../shared/domain/value-objects/ReferencedTeamId';

export class TLSFGBoxScoreTeamId extends ReferencedTeamId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TLSFGBoxScoreTeamId {
    return new TLSFGBoxScoreTeamId(value);
  }
}
