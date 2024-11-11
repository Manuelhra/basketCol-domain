import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class TeamLeagueId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamLeagueId {
    return new TeamLeagueId(value);
  }
}
