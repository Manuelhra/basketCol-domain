import { InvalidPropertyTypeError } from '../exceptions/InvalidPropertyTypeError';
import { PrimitiveValueObject } from './PrimitiveValueObject';

export abstract class StringValueObject extends PrimitiveValueObject<string> {
  protected constructor(value: string, propertyName: string) {
    super(value, propertyName, 'string');

    StringValueObject.ensureValueTypeIsCorrect(value, propertyName);
  }

  public static ensureValueTypeIsCorrect(value: any, propertyName: string): void {
    if (typeof value !== 'string') {
      throw InvalidPropertyTypeError.create(propertyName, 'string', typeof value);
    }
  }
}
