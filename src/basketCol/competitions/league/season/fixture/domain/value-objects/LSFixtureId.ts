import { FixtureId } from '../../../../../shared/domain/value-objects/FixtureId';

export class LSFixtureId extends FixtureId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFixtureId {
    return new LSFixtureId(value);
  }
}
