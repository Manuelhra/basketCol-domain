import { UpdatedAtValueObject } from '../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class LeagueTeamUpdatedAt extends UpdatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueTeamUpdatedAt {
    return new LeagueTeamUpdatedAt(value);
  }
}
