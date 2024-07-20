import { DateValueObject } from '../../../shared/domain/value-objects/DateValueObject';

export class LeagueCreationDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'creationDate');
  }
}

