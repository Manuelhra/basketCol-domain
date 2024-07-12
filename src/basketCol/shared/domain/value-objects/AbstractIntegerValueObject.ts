import InvalidPropertyTypeError from '../exceptions/InvalidPropertyTypeError';
import { PrimitiveValueObject } from './PrimitiveValueObject';

abstract class AbstractIntegerValueObject extends PrimitiveValueObject<number> {
  constructor(value: number, propertyName: string) {
    super(value, propertyName, 'integer');

    if (!Number.isInteger(value)) {
      throw new InvalidPropertyTypeError(propertyName, 'integer', typeof value);
    }
  }
}

export default AbstractIntegerValueObject;
