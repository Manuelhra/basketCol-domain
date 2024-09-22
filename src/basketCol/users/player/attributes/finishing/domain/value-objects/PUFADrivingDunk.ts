import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUFADrivingDunk extends Attribute {
  constructor(value: number) {
    super(value, 'drivingDunk');
  }

  public static create(value: number): PUFADrivingDunk {
    return new PUFADrivingDunk(value);
  }
}
