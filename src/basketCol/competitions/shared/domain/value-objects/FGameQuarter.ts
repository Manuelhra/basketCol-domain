import { NullableNumber } from '../../../../shared/domain/value-objects/NullableNumber';
import { PositiveIntegerValueObject } from '../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class FGameQuarter extends NullableNumber {
  protected constructor(value: number | null) {
    super(value, 'quarter');

    if (value !== null) {
      PositiveIntegerValueObject.ensureIsIntegerAndPositive(value, 'quarter');
    }
  }

  public get quarterAsNumberOrNull(): number | null {
    return this.value;
  }
}
