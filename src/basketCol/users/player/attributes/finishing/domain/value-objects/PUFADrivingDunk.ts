import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUFADrivingDunk extends SubAttribute {
  private constructor(value: number) {
    super(value, 'drivingDunk');
  }

  public static create(value: number): PUFADrivingDunk {
    return new PUFADrivingDunk(value);
  }
}
