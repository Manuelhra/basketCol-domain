import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSAFreeThrow extends Attribute {
  private constructor(value: number) {
    super(value, 'freeThrow');
  }

  public static create(value: number): PUSAFreeThrow {
    return new PUSAFreeThrow(value);
  }
}
