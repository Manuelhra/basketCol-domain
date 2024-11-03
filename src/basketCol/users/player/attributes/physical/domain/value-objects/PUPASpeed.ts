import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUPASpeed extends SubAttribute {
  private constructor(value: number) {
    super(value, 'speed');
  }

  public static create(value: number): PUPASpeed {
    return new PUPASpeed(value);
  }
}
