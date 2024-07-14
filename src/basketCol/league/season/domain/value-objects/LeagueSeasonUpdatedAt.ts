import DateValueObject from '../../../../shared/domain/value-objects/DateValueObject';

class LeagueSeasonUpdatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'updatedAt');
  }
}

export default LeagueSeasonUpdatedAt;
