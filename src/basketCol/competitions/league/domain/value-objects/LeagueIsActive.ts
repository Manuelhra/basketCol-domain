import { BooleanValueObject } from '../../../../shared/domain/value-objects/BooleanValueObject';

export class LeagueIsActive extends BooleanValueObject {
  private constructor(value: boolean) {
    super(value, 'isActive');
  }

  public static create(value: boolean): LeagueIsActive {
    return new LeagueIsActive(value);
  }
}
