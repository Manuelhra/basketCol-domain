import { FixtureUpdatedAt } from '../../../../../shared/domain/value-objects/FixtureUpdatedAt';

export class LSFixtureUpdatedAt extends FixtureUpdatedAt {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFixtureUpdatedAt {
    return new LSFixtureUpdatedAt(value);
  }
}
