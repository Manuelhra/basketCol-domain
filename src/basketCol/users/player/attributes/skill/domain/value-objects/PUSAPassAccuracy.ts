import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUSAPassAccuracy extends SubAttribute {
  private constructor(value: number) {
    super(value, 'passAccuracy');
  }

  public static create(value: number): PUSAPassAccuracy {
    return new PUSAPassAccuracy(value);
  }
}
