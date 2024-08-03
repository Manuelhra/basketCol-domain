import { FGameId } from '../../../competitions/shared/domain/value-objects/FGameId';
import { ValueObject } from './ValueObject';

export abstract class ReferencedFixtureGameId extends ValueObject<FGameId> {
  protected constructor(value: string, propertyName: string = 'fixtureGameId') {
    const fixtureGameId: FGameId = new FGameId(value);

    super(fixtureGameId, propertyName, 'string');
  }

  public get fixtureGameIdAsString(): string {
    return this.value.value;
  }
}
