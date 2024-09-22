import { DateValueObject } from '../../../../../shared/domain/value-objects/DateValueObject';

export class LeagueSeasonStartDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'startDate');
  }

  public static create(value: string): LeagueSeasonStartDate {
    return new LeagueSeasonStartDate(value);
  }
}
