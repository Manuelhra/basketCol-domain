import InvalidPropertyTypeError from '../exceptions/InvalidPropertyTypeError';
import { PrimitiveValueObject } from './PrimitiveValueObject';

abstract class StringValueObject extends PrimitiveValueObject<string> {
  constructor(value: string, propertyName: string) {
    super(value, propertyName, 'string');

    this.ensureValueTypeIsCorrect(value, propertyName);
  }

  private ensureValueTypeIsCorrect(value: any, propertyName: string): void {
    if (typeof value !== 'string') {
      throw new InvalidPropertyTypeError(propertyName, 'string', typeof value);
    }
  }
}
export default StringValueObject;
