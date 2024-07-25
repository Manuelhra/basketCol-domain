import { DateValueObject } from './DateValueObject';

export abstract class EstablishmentDateValueObject extends DateValueObject {
  protected constructor(value: string) {
    super(value, 'establishmentDate');
  }
}
