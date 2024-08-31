import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPAAcceleration extends Attribute {
  constructor(value: number) {
    super(value, 'acceleration');
  }
}
