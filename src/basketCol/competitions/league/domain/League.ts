import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { ILeaguePrimitives } from './ILeaguePrimitives';
import { LeagueCreatedAt } from './value-objects/LeagueCreatedAt';
import { LeagueDescription } from './value-objects/LeagueDescription';
import { LeagueEstablishmentDate } from './value-objects/LeagueEstablishmentDate';
import { LeagueId } from './value-objects/LeagueId';
import { LeagueIsActive } from './value-objects/LeagueIsActive';
import { LeagueLevel } from './value-objects/LeagueLevel';
import { LeagueLocation } from './value-objects/LeagueLocation';
import { LeagueName } from './value-objects/LeagueName';
import { LeagueRules } from './value-objects/LeagueRules';
import { LeagueUpdatedAt } from './value-objects/LeagueUpdatedAt';
import { LReferencedLeagueFounderUserId } from './value-objects/LReferencedLeagueFounderUserId';

export class League extends AggregateRoot<ILeaguePrimitives> {
  readonly #name: LeagueName;

  readonly #description: LeagueDescription;

  readonly #rules: LeagueRules;

  readonly #level: LeagueLevel;

  readonly #location: LeagueLocation;

  readonly #leagueFounderUserId: LReferencedLeagueFounderUserId;

  readonly #establishmentDate: LeagueEstablishmentDate;

  readonly #isActive: LeagueIsActive;

  private constructor(
    id: string,
    name: { short: string; official: string; },
    description: { short: string; complete: string; },
    rules: string,
    level: string,
    location: ILocationValueObjectProps,
    leagueFounderUserId: string,
    establishmentDate: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    const leagueId: LeagueId = LeagueId.create(id);
    const leagueCreatedAt: LeagueCreatedAt = LeagueCreatedAt.create(createdAt);
    const leagueUpdatedAt: LeagueUpdatedAt = LeagueUpdatedAt.create(updatedAt);

    super(leagueId, leagueCreatedAt, leagueUpdatedAt);

    this.#name = LeagueName.create(name);
    this.#description = LeagueDescription.create(description);
    this.#rules = LeagueRules.create(rules);
    this.#level = LeagueLevel.create(level);
    this.#location = LeagueLocation.create(location);
    this.#leagueFounderUserId = LReferencedLeagueFounderUserId.create(leagueFounderUserId);
    this.#establishmentDate = LeagueEstablishmentDate.create(establishmentDate);
    this.#isActive = LeagueIsActive.create(isActive);
  }

  public override get toPrimitives(): ILeaguePrimitives {
    return {
      id: this.id.value,
      name: this.#name.value,
      description: this.#description.value,
      rules: this.#rules.value,
      level: this.#level.value,
      location: this.#location.value,
      leagueFounderUserId: this.#leagueFounderUserId.leagueFounderUserIdAsString,
      establishmentDate: this.#establishmentDate.value,
      isActive: this.#isActive.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    name: { short: string; official: string },
    description: { short: string; complete: string },
    rules: string,
    level: string,
    location: ILocationValueObjectProps,
    leagueFounderUserId: string,
    establishmentDate: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
  ): League {
    return new League(
      id,
      name,
      description,
      rules,
      level,
      location,
      leagueFounderUserId,
      establishmentDate,
      isActive,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    name: { short: string; official: string },
    description: { short: string; complete: string },
    rules: string,
    level: string,
    location: ILocationValueObjectProps,
    leagueFounderUserId: string,
    establishmentDate: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
  ): League {
    return new League(
      id,
      name,
      description,
      rules,
      level,
      location,
      leagueFounderUserId,
      establishmentDate,
      isActive,
      createdAt,
      updatedAt,
    );
  }
}
