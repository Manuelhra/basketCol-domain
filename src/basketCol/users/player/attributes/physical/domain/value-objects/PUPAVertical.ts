import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPAVertical extends Attribute {
  private constructor(value: number) {
    super(value, 'vertical');
  }

  public static create(value: number): PUPAVertical {
    return new PUPAVertical(value);
  }
}
