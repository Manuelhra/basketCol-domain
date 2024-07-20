import { PrimitiveValueObject } from './PrimitiveValueObject';

export abstract class BooleanValueObject extends PrimitiveValueObject<boolean> {
  constructor(value: boolean, propertyName: string) {
    super(value, propertyName, 'boolean');
  }
}
