import { NullableNumber } from '../../../../shared/domain/value-objects/NullableNumber';
import { PositiveIntegerValueObject } from '../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class FGameOvertimeNumber extends NullableNumber {
  protected constructor(value: number | null) {
    super(value, 'overtimeNumber');

    if (value !== null) {
      PositiveIntegerValueObject.ensureIsIntegerAndPositive(value, 'overtimeNumber');
    }
  }

  public get overtimeNumberAsNumberOrNull(): number | null {
    return this.value;
  }
}
