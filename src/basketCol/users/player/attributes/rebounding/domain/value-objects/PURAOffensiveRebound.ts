import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PURAOffensiveRebound extends SubAttribute {
  private constructor(value: number) {
    super(value, 'offensiveRebound');
  }

  public static create(value: number): PURAOffensiveRebound {
    return new PURAOffensiveRebound(value);
  }
}
