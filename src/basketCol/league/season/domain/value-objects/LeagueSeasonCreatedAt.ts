import DateValueObject from '../../../../shared/domain/value-objects/DateValueObject';

class LeagueSeasonCreatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'createdAt');
  }
}

export default LeagueSeasonCreatedAt;
