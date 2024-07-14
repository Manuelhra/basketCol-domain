import DateValueObject from '../../../shared/domain/value-objects/DateValueObject';

class LeagueCreatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'createdAt');
  }
}

export default LeagueCreatedAt;
