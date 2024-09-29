import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUPASpeed extends Attribute {
  private constructor(value: number) {
    super(value, 'speed');
  }

  public static create(value: number): PUPASpeed {
    return new PUPASpeed(value);
  }
}
