import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class TeamLeagueUpdatedAt extends UpdatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamLeagueUpdatedAt {
    return new TeamLeagueUpdatedAt(value);
  }
}
