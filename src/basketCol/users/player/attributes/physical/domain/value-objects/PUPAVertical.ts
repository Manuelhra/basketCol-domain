import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPAVertical extends Attribute {
  constructor(value: number) {
    super(value, 'vertical');
  }

  public static create(value: number): PUPAVertical {
    return new PUPAVertical(value);
  }
}
