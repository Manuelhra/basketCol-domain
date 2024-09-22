import { DateValueObject } from '../../../../../shared/domain/value-objects/DateValueObject';

export class LeagueSeasonEndDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'endDate');
  }

  public static create(value: string): LeagueSeasonEndDate {
    return new LeagueSeasonEndDate(value);
  }
}
