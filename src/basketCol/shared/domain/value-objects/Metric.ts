import { PositiveIntegerValueObject } from './PositiveIntegerValueObject';

export abstract class Metric extends PositiveIntegerValueObject {
  protected constructor(value: number, propertyName: string) {
    super(value, propertyName);
  }
}
