import { CreatedAtValueObject } from '../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class LeagueTeamCreatedAt extends CreatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueTeamCreatedAt {
    return new LeagueTeamCreatedAt(value);
  }
}
