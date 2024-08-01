import { ValueObject } from './ValueObject';

export abstract class NullableString extends ValueObject<string | null> {
  protected constructor(value: string | null, propertyName: string) {
    super(value, propertyName, 'string | null', { allowNull: true });
  }
}
