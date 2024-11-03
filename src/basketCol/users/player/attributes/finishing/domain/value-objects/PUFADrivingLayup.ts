import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUFADrivingLayup extends SubAttribute {
  private constructor(value: number) {
    super(value, 'drivingLayup');
  }

  public static create(value: number): PUFADrivingLayup {
    return new PUFADrivingLayup(value);
  }
}
