import { CreatedAtValueObject } from '../../../../shared/domain/value-objects/CreatedAtValueObject';

export class TeamLeagueCreatedAt extends CreatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamLeagueCreatedAt {
    return new TeamLeagueCreatedAt(value);
  }
}
