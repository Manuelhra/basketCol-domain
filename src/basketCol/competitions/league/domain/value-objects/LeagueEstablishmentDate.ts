import { DateValueObject } from '../../../../shared/domain/value-objects/DateValueObject';

export class LeagueEstablishmentDate extends DateValueObject {
  constructor(value: string) {
    super(value, 'establishmentDate');
  }
}
