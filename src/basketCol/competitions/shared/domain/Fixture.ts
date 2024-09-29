import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IFixturePrimitives } from './IFixturePrimitives';
import { FixtureCreatedAt } from './value-objects/FixtureCreatedAt';
import { FixtureDate } from './value-objects/FixtureDate';
import { FixtureId } from './value-objects/FixtureId';
import { FixtureName } from './value-objects/FixtureName';
import { FixtureUpdatedAt } from './value-objects/FixtureUpdatedAt';

export abstract class Fixture<I extends IFixturePrimitives> extends AggregateRoot<I> {
  protected readonly date: FixtureDate;

  protected readonly name: FixtureName;

  protected constructor(
    id: FixtureId,
    date: FixtureDate,
    name: FixtureName,
    createdAt: FixtureCreatedAt,
    updatedAt: FixtureUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this.date = date;
    this.name = name;
  }
}
