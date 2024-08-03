import { FixtureId } from '../../../competitions/shared/domain/value-objects/FixtureId';
import { ValueObject } from './ValueObject';

export abstract class ReferencedFixtureId extends ValueObject<FixtureId> {
  protected constructor(value: string, propertyName: string = 'fixtureId') {
    const fixtureId: FixtureId = new FixtureId(value);

    super(fixtureId, propertyName, 'string');
  }

  public get fixtureIdAsString(): string {
    return this.value.value;
  }
}
