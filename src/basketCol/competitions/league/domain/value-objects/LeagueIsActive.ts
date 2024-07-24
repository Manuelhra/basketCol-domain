import { BooleanValueObject } from '../../../../shared/domain/value-objects/BooleanValueObject';

export class LeagueIsActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'isActive');
  }
}
