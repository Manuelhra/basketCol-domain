import ObjectValueObject from './ObjectValueObject';

abstract class StringArrayValueObject extends ObjectValueObject<string[]> {
  constructor(value: string[], propertyName: string) {
    super(value, propertyName, 'string[]');
  }
}

export default StringArrayValueObject;
