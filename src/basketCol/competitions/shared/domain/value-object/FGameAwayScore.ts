import { PositiveIntegerValueObject } from '../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class FGameAwayScore extends PositiveIntegerValueObject {
  protected constructor(value: number) {
    super(value, 'awayScore');
  }
}
