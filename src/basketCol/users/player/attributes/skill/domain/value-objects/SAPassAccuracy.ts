import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class SAPassAccuracy extends Attribute {
  constructor(value: number) {
    super(value, 'passAccuracy');
  }
}

