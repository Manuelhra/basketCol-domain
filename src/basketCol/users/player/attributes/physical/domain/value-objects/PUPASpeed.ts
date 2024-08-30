import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPASpeed extends Attribute {
  constructor(value: number) {
    super(value, 'speed');
  }
}
