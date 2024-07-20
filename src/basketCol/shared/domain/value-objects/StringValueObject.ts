import { InvalidPropertyTypeError } from '../exceptions/InvalidPropertyTypeError';
import { PrimitiveValueObject } from './PrimitiveValueObject';

export abstract class StringValueObject extends PrimitiveValueObject<string> {
  constructor(value: string, propertyName: string) {
    super(value, propertyName, 'string');

    StringValueObject.ensureValueTypeIsCorrect(value, propertyName);
  }

  private static ensureValueTypeIsCorrect(value: any, propertyName: string): void {
    if (typeof value !== 'string') {
      throw new InvalidPropertyTypeError(propertyName, 'string', typeof value);
    }
  }
}
