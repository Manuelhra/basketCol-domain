import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PASpeed extends Attribute {
  constructor(value: number) {
    super(value, 'speed');
  }
}

