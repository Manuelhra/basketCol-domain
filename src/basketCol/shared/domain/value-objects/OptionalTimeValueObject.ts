import { TimeValueObject } from './TimeValueObject';
import { ValueObject } from './ValueObject';

export abstract class OptionalTimeValueObject extends ValueObject<string | undefined> {
  protected constructor(value: string | undefined, propertyName: string) {
    super(value, propertyName, 'string | undefined', { allowUndefined: true });

    if (value !== undefined) {
      TimeValueObject.ensureIsValidTime(value);
    }
  }

  public get timeAsStringOrUndefined(): string | undefined {
    return this.value;
  }
}
