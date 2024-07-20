import { ObjectValueObject } from './ObjectValueObject';

export abstract class NumberArrayValueObject extends ObjectValueObject<number[]> {
  constructor(value: number[], propertyName: string) {
    super(value, propertyName, 'number[]');
  }
}

