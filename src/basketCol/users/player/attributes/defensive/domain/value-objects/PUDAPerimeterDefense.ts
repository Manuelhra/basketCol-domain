import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUDAPerimeterDefense extends Attribute {
  constructor(value: number) {
    super(value, 'perimeterDefense');
  }
}
