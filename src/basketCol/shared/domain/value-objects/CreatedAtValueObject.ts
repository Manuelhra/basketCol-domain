import { DateValueObject } from './DateValueObject';

export abstract class CreatedAtValueObject extends DateValueObject {
  protected constructor(value: string) {
    super(value, 'createdAt');
  }
}
