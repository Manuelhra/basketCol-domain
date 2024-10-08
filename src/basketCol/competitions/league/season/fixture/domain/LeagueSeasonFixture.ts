import { Fixture } from '../../../../shared/domain/Fixture';
import { ILeagueSeasonFixturePrimitives } from './ILeagueSeasonFixturePrimitives';
import { LSFixtureCreatedAt } from './value-objects/LSFixtureCreatedAt';
import { LSFixtureDate } from './value-objects/LSFixtureDate';
import { LSFixtureId } from './value-objects/LSFixtureId';
import { LSFixtureLeagueSeasonId } from './value-objects/LSFixtureLeagueSeasonId';
import { LSFixtureName } from './value-objects/LSFixtureName';
import { LSFixtureUpdatedAt } from './value-objects/LSFixtureUpdatedAt';

export class LeagueSeasonFixture extends Fixture<ILeagueSeasonFixturePrimitives> {
  readonly #leagueSeasonId: LSFixtureLeagueSeasonId;

  private constructor(
    id: string,
    date: string,
    name: string | null,
    leagueSeasonId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      LSFixtureId.create(id),
      LSFixtureDate.create(date),
      LSFixtureName.create(name),
      LSFixtureCreatedAt.create(createdAt),
      LSFixtureUpdatedAt.create(updatedAt),
    );

    this.#leagueSeasonId = LSFixtureLeagueSeasonId.create(leagueSeasonId);
  }

  public override get toPrimitives(): ILeagueSeasonFixturePrimitives {
    return {
      id: this.id.value,
      date: this.date.dateAsString,
      name: this.name.value,
      leagueSeasonId: this.#leagueSeasonId.leagueSeasonIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    date: string,
    name: string | null,
    leagueSeasonId: string,
    createdAt: string,
    updatedAt: string,
  ): LeagueSeasonFixture {
    return new LeagueSeasonFixture(
      id,
      date,
      name,
      leagueSeasonId,
      createdAt,
      updatedAt,
    );
  }
}
