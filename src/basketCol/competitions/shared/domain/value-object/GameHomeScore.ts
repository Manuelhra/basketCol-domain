import { PositiveIntegerValueObject } from '../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class GameHomeScore extends PositiveIntegerValueObject {
  protected constructor(value: number) {
    super(value, 'homeScore');
  }
}
