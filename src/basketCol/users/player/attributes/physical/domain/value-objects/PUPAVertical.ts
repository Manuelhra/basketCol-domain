import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUPAVertical extends SubAttribute {
  private constructor(value: number) {
    super(value, 'vertical');
  }

  public static create(value: number): PUPAVertical {
    return new PUPAVertical(value);
  }
}
