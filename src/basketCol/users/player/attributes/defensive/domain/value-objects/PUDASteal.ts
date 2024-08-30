import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUDASteal extends Attribute {
  constructor(value: number) {
    super(value, 'steal');
  }
}
