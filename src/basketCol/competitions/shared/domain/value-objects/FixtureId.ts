import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class FixtureId extends IdValueObject {
  public constructor(value: string) {
    super(value);
  }
}
