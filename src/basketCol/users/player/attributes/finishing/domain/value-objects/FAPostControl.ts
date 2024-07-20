import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class FAPostControl extends Attribute {
  constructor(value: number) {
    super(value, 'postControl');
  }
}

