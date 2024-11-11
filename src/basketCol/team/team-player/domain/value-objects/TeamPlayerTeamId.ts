import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class TeamPlayerTeamId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'teamId');
  }

  public static create(value: string): TeamPlayerTeamId {
    return new TeamPlayerTeamId(value);
  }
}
