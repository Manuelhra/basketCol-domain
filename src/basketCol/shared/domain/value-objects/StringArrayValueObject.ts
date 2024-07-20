import { ObjectValueObject } from './ObjectValueObject';

export abstract class StringArrayValueObject extends ObjectValueObject<string[]> {
  constructor(value: string[], propertyName: string) {
    super(value, propertyName, 'string[]');
  }
}

