import { IdValueObject } from '../../../shared/domain/value-objects/IdValueObject';

export class TReferencedTeamFounderUserId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TReferencedTeamFounderUserId {
    return new TReferencedTeamFounderUserId(value);
  }
}
