import DateValueObject from '../../../shared/domain/value-objects/DateValueObject';

class LeagueUpdatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'updatedAt');
  }
}

export default LeagueUpdatedAt;
