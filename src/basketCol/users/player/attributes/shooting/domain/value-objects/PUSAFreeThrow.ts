import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUSAFreeThrow extends SubAttribute {
  private constructor(value: number) {
    super(value, 'freeThrow');
  }

  public static create(value: number): PUSAFreeThrow {
    return new PUSAFreeThrow(value);
  }
}
