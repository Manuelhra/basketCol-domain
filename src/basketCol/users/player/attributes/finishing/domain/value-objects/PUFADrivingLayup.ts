import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUFADrivingLayup extends Attribute {
  constructor(value: number) {
    super(value, 'drivingLayup');
  }
}
