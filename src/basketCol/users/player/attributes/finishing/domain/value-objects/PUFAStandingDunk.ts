import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUFAStandingDunk extends Attribute {
  private constructor(value: number) {
    super(value, 'standingDunk');
  }

  public static create(value: number): PUFAStandingDunk {
    return new PUFAStandingDunk(value);
  }
}
