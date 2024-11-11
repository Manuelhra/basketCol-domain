import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class TeamLeagueLeagueId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'leagueId');
  }

  public static create(value: string): TeamLeagueLeagueId {
    return new TeamLeagueLeagueId(value);
  }
}
