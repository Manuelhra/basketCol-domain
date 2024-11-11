import { GenderValueObject } from '../../../../shared/domain/value-objects';

export class LeagueGender extends GenderValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueGender {
    return new LeagueGender(value);
  }
}
