import { DateValueObject } from './DateValueObject';

export abstract class UpdatedAtValueObject extends DateValueObject {
  protected constructor(value: string) {
    super(value, 'updatedAt');
  }
}
