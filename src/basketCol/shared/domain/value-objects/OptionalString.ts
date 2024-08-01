import { ValueObject } from './ValueObject';

export abstract class OptionalString extends ValueObject<string | undefined> {
  protected constructor(value: string | undefined, propertyName: string) {
    super(value, propertyName, 'string | undefined', { allowUndefined: true });
  }
}
