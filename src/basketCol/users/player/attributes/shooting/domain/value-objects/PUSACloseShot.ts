import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSACloseShot extends Attribute {
  constructor(value: number) {
    super(value, 'closeShot');
  }
}
