import { InvalidMinutesDurationError } from '../exceptions/InvalidMinutesDurationError';
import { ObjectValueObject } from './ObjectValueObject';

interface IMinutesDurationValueObjectProps {
  value: number;
  unit: string;
}

export abstract class MinutesDurationValueObject extends ObjectValueObject<IMinutesDurationValueObjectProps> {
  protected constructor(value: number, propertyName: string) {
    super({ value: MinutesDurationValueObject.ensureValidDuration(value), unit: 'minutes' }, propertyName, '{ value: number; unit: string }');
  }

  private static ensureValidDuration(value: number): number {
    if (value < 0 || !Number.isInteger(value)) {
      throw InvalidMinutesDurationError.create(value);
    }
    return value;
  }
}
