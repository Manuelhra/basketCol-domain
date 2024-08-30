import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUDAInteriorDefense extends Attribute {
  constructor(value: number) {
    super(value, 'interiorDefense');
  }
}
