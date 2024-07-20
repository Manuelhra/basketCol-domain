import { DateValueObject } from './DateValueObject';

export class UpdatedAtValueObject extends DateValueObject {
  constructor(value: string) {
    super(value, 'updatedAt');
  }
}

