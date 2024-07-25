import { ObjectValueObject } from './ObjectValueObject';

export abstract class NumberArrayValueObject extends ObjectValueObject<number[]> {
  protected constructor(value: number[], propertyName: string) {
    super(value, propertyName, 'number[]');
  }
}
