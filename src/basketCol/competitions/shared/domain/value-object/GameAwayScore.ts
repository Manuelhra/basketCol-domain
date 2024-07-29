import { PositiveIntegerValueObject } from '../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class GameAwayScore extends PositiveIntegerValueObject {
  protected constructor(value: number) {
    super(value, 'awayScore');
  }
}
