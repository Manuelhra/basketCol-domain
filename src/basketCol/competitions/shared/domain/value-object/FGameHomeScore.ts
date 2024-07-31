import { PositiveIntegerValueObject } from '../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class FGameHomeScore extends PositiveIntegerValueObject {
  protected constructor(value: number) {
    super(value, 'homeScore');
  }
}
