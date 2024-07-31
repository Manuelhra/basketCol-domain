import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IFixture } from './IFixture';
import { FixtureCreatedAt } from './value-object/FixtureCreatedAt';
import { FixtureDate } from './value-object/FixtureDate';
import { FixtureId } from './value-object/FixtureId';
import { FixtureName } from './value-object/FixtureName';
import { FixtureUpdatedAt } from './value-object/FixtureUpdatedAt';

export abstract class Fixture<I extends IFixture> extends AggregateRoot<I> {
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
