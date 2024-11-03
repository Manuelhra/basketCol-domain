import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUPAAcceleration extends SubAttribute {
  private constructor(value: number) {
    super(value, 'acceleration');
  }

  public static create(value: number): PUPAAcceleration {
    return new PUPAAcceleration(value);
  }
}
