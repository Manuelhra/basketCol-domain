import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSAThreePointShot extends Attribute {
  constructor(value: number) {
    super(value, 'threePointShot');
  }
}
