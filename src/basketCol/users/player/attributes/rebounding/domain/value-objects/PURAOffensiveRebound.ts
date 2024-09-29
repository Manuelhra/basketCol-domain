import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PURAOffensiveRebound extends Attribute {
  private constructor(value: number) {
    super(value, 'offensiveRebound');
  }

  public static create(value: number): PURAOffensiveRebound {
    return new PURAOffensiveRebound(value);
  }
}
