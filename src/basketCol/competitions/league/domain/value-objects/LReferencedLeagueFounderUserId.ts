import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class LReferencedLeagueFounderUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LReferencedLeagueFounderUserId {
    return new LReferencedLeagueFounderUserId(value);
  }
}
