import { DateValueObject } from '../../../../../shared/domain/value-objects/DateValueObject';

export class LeagueTeamJoinedAt extends DateValueObject {
  private constructor(value: string) {
    super(value, 'joinedAt');
  }

  public static create(value: string): LeagueTeamJoinedAt {
    return new LeagueTeamJoinedAt(value);
  }
}
