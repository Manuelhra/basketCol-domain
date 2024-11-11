import { IdValueObject } from '../../../../../../../../../shared/domain/value-objects/IdValueObject';

export class TLSFGBoxScoreTeamId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TLSFGBoxScoreTeamId {
    return new TLSFGBoxScoreTeamId(value);
  }
}
