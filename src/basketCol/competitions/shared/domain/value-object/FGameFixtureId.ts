import { ReferencedFixtureId } from '../../../../shared/domain/value-objects/ReferencedFixtureId';

export abstract class FGameFixtureId extends ReferencedFixtureId {
  protected constructor(value: string, propertyName: string = 'fixtureId') {
    super(value, propertyName);
  }
}
