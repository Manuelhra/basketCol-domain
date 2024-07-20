import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PAAcceleration extends Attribute {
  constructor(value: number) {
    super(value, 'acceleration');
  }
}

