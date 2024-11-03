import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUFAStandingDunk extends SubAttribute {
  private constructor(value: number) {
    super(value, 'standingDunk');
  }

  public static create(value: number): PUFAStandingDunk {
    return new PUFAStandingDunk(value);
  }
}
