import { DateValueObject } from '../../../../shared/domain/value-objects/DateValueObject';

export class LeagueSeasonEndDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'endDate');
  }
}

