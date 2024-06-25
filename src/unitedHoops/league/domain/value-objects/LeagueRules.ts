import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

class LeagueRules extends StringValueObject {
  constructor(value: string) {
    super(value, 'rules');
  }
}

export default LeagueRules;
