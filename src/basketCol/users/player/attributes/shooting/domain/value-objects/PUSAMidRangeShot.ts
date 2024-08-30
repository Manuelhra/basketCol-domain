import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSAMidRangeShot extends Attribute {
  constructor(value: number) {
    super(value, 'midRangeShot');
  }
}
