import DateValueObject from '../../../shared/domain/value-objects/DateValueObject';

class LeagueCreationDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'creationDate');
  }
}

export default LeagueCreationDate;
