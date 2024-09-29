import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPAStrength extends Attribute {
  private constructor(value: number) {
    super(value, 'strength');
  }

  public static create(value: number): PUPAStrength {
    return new PUPAStrength(value);
  }
}
