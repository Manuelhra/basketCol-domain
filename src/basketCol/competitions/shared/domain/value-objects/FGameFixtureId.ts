import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export abstract class FGameFixtureId extends IdValueObject {
  protected constructor(value: string, propertyName: string = 'fixtureId') {
    super(value, propertyName);
  }
}
