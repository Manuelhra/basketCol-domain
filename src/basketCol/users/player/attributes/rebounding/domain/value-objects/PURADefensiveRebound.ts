import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PURADefensiveRebound extends SubAttribute {
  private constructor(value: number) {
    super(value, 'defensiveRebound');
  }

  public static create(value: number): PURADefensiveRebound {
    return new PURADefensiveRebound(value);
  }
}
