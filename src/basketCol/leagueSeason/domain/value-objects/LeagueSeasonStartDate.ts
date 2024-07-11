import DateValueObject from '../../../shared/domain/value-objects/DateValueObject';

class LeagueSeasonStartDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'startDate');
  }
}

export default LeagueSeasonStartDate;
