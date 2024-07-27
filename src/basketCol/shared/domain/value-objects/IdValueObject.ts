import { UuidValueObject } from './UuidValueObject';

export abstract class IdValueObject extends UuidValueObject {
  protected constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
