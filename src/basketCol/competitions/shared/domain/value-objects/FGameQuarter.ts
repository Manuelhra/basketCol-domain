import { PositiveIntegerValueObject } from '../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class FGameQuarter extends PositiveIntegerValueObject {
  protected constructor(value: number) {
    super(value, 'quarter');
  }
}
