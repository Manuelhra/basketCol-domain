import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class LeagueLeagueFounderUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueLeagueFounderUserId {
    return new LeagueLeagueFounderUserId(value);
  }
}
