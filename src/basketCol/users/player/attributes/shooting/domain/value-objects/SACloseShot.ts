import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class SACloseShot extends Attribute {
  constructor(value: number) {
    super(value, 'closeShot');
  }
}

