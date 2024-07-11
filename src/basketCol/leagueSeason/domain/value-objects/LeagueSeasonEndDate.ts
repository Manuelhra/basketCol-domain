import DateValueObject from '../../../shared/domain/value-objects/DateValueObject';

class LeagueSeasonEndDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'endDate');
  }
}

export default LeagueSeasonEndDate;
