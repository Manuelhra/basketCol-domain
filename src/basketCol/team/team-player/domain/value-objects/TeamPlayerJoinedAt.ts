import { DateValueObject } from '../../../../shared/domain/value-objects/DateValueObject';

export class TeamPlayerJoinedAt extends DateValueObject {
  private constructor(value: string) {
    super(value, 'joinedAt');
  }

  public static create(value: string): TeamPlayerJoinedAt {
    return new TeamPlayerJoinedAt(value);
  }
}
