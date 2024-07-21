import { UuidValueObject } from './UuidValueObject';

export class IdValueObject extends UuidValueObject {
  constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
