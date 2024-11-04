import { ValueObject } from './ValueObject';

export abstract class StringArrayValueObject extends ValueObject<string[]> {
  protected constructor(value: string[], propertyName: string) {
    super(value, propertyName, 'string[]');
  }
}
