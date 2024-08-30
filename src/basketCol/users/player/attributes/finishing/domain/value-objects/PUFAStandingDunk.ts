import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUFAStandingDunk extends Attribute {
  constructor(value: number) {
    super(value, 'standingDunk');
  }
}
