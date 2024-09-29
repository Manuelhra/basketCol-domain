import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPAAcceleration extends Attribute {
  private constructor(value: number) {
    super(value, 'acceleration');
  }

  public static create(value: number): PUPAAcceleration {
    return new PUPAAcceleration(value);
  }
}
