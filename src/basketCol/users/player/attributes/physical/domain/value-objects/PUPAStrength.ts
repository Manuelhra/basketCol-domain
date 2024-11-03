import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUPAStrength extends SubAttribute {
  private constructor(value: number) {
    super(value, 'strength');
  }

  public static create(value: number): PUPAStrength {
    return new PUPAStrength(value);
  }
}
