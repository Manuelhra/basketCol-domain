import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class TeamPlayerPlayerUserId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'playerUserId');
  }

  public static create(value: string): TeamPlayerPlayerUserId {
    return new TeamPlayerPlayerUserId(value);
  }
}
