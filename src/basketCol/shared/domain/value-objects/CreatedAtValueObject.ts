import { DateValueObject } from './DateValueObject';

export class CreatedAtValueObject extends DateValueObject {
  constructor(value: string) {
    super(value, 'createdAt');
  }
}

