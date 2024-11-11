import { DateValueObject } from '../../../../shared/domain/value-objects/DateValueObject';

export class TeamLeagueJoinedAt extends DateValueObject {
  private constructor(value: string) {
    super(value, 'joinedAt');
  }

  public static create(value: string): TeamLeagueJoinedAt {
    return new TeamLeagueJoinedAt(value);
  }
}
