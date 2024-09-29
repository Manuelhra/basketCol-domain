import { FixtureCreatedAt } from '../../../../../shared/domain/value-objects/FixtureCreatedAt';

export class LSFixtureCreatedAt extends FixtureCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFixtureCreatedAt {
    return new LSFixtureCreatedAt(value);
  }
}
