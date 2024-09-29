import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PURADefensiveRebound extends Attribute {
  private constructor(value: number) {
    super(value, 'defensiveRebound');
  }

  public static create(value: number): PURADefensiveRebound {
    return new PURADefensiveRebound(value);
  }
}
