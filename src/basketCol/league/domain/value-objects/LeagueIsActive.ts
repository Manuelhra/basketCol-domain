import BooleanValueObject from '../../../shared/domain/value-objects/BooleanValueObject';

class LeagueIsActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'isActive');
  }
}

export default LeagueIsActive;
