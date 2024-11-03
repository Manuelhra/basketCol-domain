import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUSACloseShot extends SubAttribute {
  private constructor(value: number) {
    super(value, 'closeShot');
  }

  public static create(value: number): PUSACloseShot {
    return new PUSACloseShot(value);
  }
}
