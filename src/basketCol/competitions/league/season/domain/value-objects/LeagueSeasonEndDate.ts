import { DateValueObject } from '../../../../../shared/domain/value-objects/DateValueObject';

export class LeagueSeasonEndDate extends DateValueObject {
  private constructor(value: string) {
    super(value, 'endDate');
  }

  public static create(value: string): LeagueSeasonEndDate {
    return new LeagueSeasonEndDate(value);
  }
}
