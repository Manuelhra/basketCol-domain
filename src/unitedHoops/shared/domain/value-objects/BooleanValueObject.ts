import { PrimitiveValueObject } from './PrimitiveValueObject';

abstract class BooleanValueObject extends PrimitiveValueObject<boolean> {
  constructor(value: boolean, propertyName: string) {
    super(value, propertyName, 'boolean');
  }
}
export default BooleanValueObject;
