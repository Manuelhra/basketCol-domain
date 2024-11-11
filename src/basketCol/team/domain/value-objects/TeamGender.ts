import { GenderValueObject } from '../../../shared/domain/value-objects/GenderValueObject';

export class TeamGender extends GenderValueObject {
  private constructor(value: string) {
    super(value);
  }

  static create(value: string): TeamGender {
    return new TeamGender(value);
  }
}
