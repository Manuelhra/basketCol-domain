import { DateValueObject } from '../../../../shared/domain/value-objects/DateValueObject';

export abstract class GameDate extends DateValueObject {
  protected constructor(value: string) {
    super(value, 'date');
  }
}
