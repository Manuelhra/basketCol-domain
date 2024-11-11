import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class TeamPlayerId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamPlayerId {
    return new TeamPlayerId(value);
  }
}
