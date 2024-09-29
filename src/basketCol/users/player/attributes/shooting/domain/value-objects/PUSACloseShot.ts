import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSACloseShot extends Attribute {
  private constructor(value: number) {
    super(value, 'closeShot');
  }

  public static create(value: number): PUSACloseShot {
    return new PUSACloseShot(value);
  }
}
