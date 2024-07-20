import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class SABallHandle extends Attribute {
  constructor(value: number) {
    super(value, 'ballHandle');
  }
}

