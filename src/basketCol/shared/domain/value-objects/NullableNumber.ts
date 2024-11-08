import { ValueObject } from './ValueObject';

export abstract class NullableNumber extends ValueObject<number | null> {
  protected constructor(value: number | null, propertyName: string) {
    super(value, propertyName, 'number | null', { allowNull: true });
  }
}
