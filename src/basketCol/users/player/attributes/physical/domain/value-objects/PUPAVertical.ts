import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPAVertical extends Attribute {
  constructor(value: number) {
    super(value, 'vertical');
  }
}
