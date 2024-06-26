import BooleanValueObject from '../../../shared/domain/value-objects/BooleanValueObject';

class LeagueSeasonStatus extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'status');
  }
}

export default LeagueSeasonStatus;
