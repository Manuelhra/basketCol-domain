import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPAStamina extends Attribute {
  private constructor(value: number) {
    super(value, 'stamina');
  }

  public static create(value: number): PUPAStamina {
    return new PUPAStamina(value);
  }
}
