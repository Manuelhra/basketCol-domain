import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class DAInteriorDefense extends Attribute {
  constructor(value: number) {
    super(value, 'interiorDefense');
  }
}

