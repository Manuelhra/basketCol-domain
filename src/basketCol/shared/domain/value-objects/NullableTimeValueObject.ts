import { TimeValueObject } from './TimeValueObject';
import { ValueObject } from './ValueObject';

export abstract class NullableTimeValueObject extends ValueObject<string | null> {
  protected constructor(value: string | null, propertyName: string) {
    super(value, propertyName, 'string | null', { allowNull: true });

    if (value !== null) {
      TimeValueObject.ensureIsValidTime(value);
    }
  }

  public get timeAsStringOrNull(): string | null {
    return this.value;
  }
}
