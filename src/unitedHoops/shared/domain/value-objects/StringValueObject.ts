import InvalidArgumentError from '../exceptions/InvalidArgumentError';
import { PrimitiveValueObject } from './PrimitiveValueObject';

abstract class StringValueObject extends PrimitiveValueObject<string> {
  constructor(value: string, valueObjectName: string) {
    super(value, valueObjectName);

    this.ensureValueTypeIsCorrect(value, valueObjectName);
  }

  private ensureValueTypeIsCorrect(value: any, valueObjectName: string) {
    if (typeof value !== 'string') {
      throw new InvalidArgumentError(`${valueObjectName} must be type string.`);
    }
  }
}
export default StringValueObject;
