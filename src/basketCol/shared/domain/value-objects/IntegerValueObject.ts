import { InvalidPropertyTypeError } from '../exceptions/InvalidPropertyTypeError';
import { PrimitiveValueObject } from './PrimitiveValueObject';

export abstract class IntegerValueObject extends PrimitiveValueObject<number> {
  protected constructor(value: number, propertyName: string) {
    super(value, propertyName, 'integer');

    if (!Number.isInteger(value)) {
      throw new InvalidPropertyTypeError(propertyName, 'integer', typeof value);
    }
  }
}
