import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class FixtureId extends IdValueObject {
  protected constructor(value: string) {
    super(value);
  }

  public static create(value: string): FixtureId {
    return new FixtureId(value);
  }
}
