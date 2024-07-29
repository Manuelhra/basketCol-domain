import { NotIntegerError } from '../exceptions/NotIntegerError';
import { PrimitiveValueObject } from './PrimitiveValueObject';

export abstract class IntegerValueObject extends PrimitiveValueObject<number> {
  protected constructor(value: number, propertyName: string) {
    super(value, propertyName, 'integer');

    this.ensureIsInteger(value, propertyName);
  }

  private ensureIsInteger(value: number, propertyName: string): void {
    if (!Number.isInteger(value)) {
      throw new NotIntegerError(propertyName, value);
    }
  }
}
