import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSAPassAccuracy extends Attribute {
  constructor(value: number) {
    super(value, 'passAccuracy');
  }

  public static create(value: number): PUSAPassAccuracy {
    return new PUSAPassAccuracy(value);
  }
}
