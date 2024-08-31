import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSAPassAccuracy extends Attribute {
  constructor(value: number) {
    super(value, 'passAccuracy');
  }
}
