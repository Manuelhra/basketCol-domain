import ObjectValueObject from './ObjectValueObject';

abstract class NumberArrayValueObject extends ObjectValueObject<number[]> {
  constructor(value: number[], propertyName: string) {
    super(value, propertyName, 'number[]');
  }
}

export default NumberArrayValueObject;
