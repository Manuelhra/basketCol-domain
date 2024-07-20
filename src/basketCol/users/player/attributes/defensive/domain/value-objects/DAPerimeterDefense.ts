import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class DAPerimeterDefense extends Attribute {
  constructor(value: number) {
    super(value, 'perimeterDefense');
  }
}

