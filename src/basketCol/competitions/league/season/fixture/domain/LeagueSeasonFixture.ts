import { Fixture } from '../../../../shared/domain/Fixture';
import { ILeagueSeasonFixture } from './ILeagueSeasonFixture';
import { LSFixtureCreatedAt } from './value-objects/LSFixtureCreatedAt';
import { LSFixtureDate } from './value-objects/LSFixtureDate';
import { LSFixtureId } from './value-objects/LSFixtureId';
import { LSFixtureLeagueSeasonId } from './value-objects/LSFixtureLeagueSeasonId';
import { LSFixtureName } from './value-objects/LSFixtureName';

export class LeagueSeasonFixture extends Fixture<ILeagueSeasonFixture> {
  readonly #leagueSeasonId: LSFixtureLeagueSeasonId;

  constructor(
    id: string,
    date: string,
    name: string | null,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new LSFixtureId(id),
      new LSFixtureDate(date),
      new LSFixtureName(name),
      new LSFixtureCreatedAt(createdAt),
      new LSFixtureCreatedAt(updatedAt),
    );

    this.#leagueSeasonId = new LSFixtureLeagueSeasonId(id);
  }

  public toPrimitives(): ILeagueSeasonFixture {
    return {
      id: this.id.value,
      date: this.date.dateAsString,
      name: this.name.value,
      leagueSeasonId: this.#leagueSeasonId.leagueSeasonIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
