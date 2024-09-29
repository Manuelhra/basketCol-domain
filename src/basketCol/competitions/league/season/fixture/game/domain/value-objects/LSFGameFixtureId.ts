import { FGameFixtureId } from '../../../../../../shared/domain/value-objects/FGameFixtureId';

export class LSFGameFixtureId extends FGameFixtureId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFGameFixtureId {
    return new LSFGameFixtureId(value);
  }
}
