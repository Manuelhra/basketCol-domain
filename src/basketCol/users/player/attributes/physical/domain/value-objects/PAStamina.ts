import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PAStamina extends Attribute {
  constructor(value: number) {
    super(value, 'stamina');
  }
}

