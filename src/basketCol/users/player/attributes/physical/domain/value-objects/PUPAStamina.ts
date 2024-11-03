import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUPAStamina extends SubAttribute {
  private constructor(value: number) {
    super(value, 'stamina');
  }

  public static create(value: number): PUPAStamina {
    return new PUPAStamina(value);
  }
}
