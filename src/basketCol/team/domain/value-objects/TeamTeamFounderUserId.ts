import { IdValueObject } from '../../../shared/domain/value-objects/IdValueObject';

export class TeamTeamFounderUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamTeamFounderUserId {
    return new TeamTeamFounderUserId(value);
  }
}
