import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { ILeague } from './ILeague';
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

export class League extends AggregateRoot<ILeague> {
  readonly #name: LeagueName;

  readonly #description: LeagueDescription;

  readonly #rules: LeagueRules;

  readonly #level: LeagueLevel;

  readonly #location: LeagueLocation;

  readonly #leagueFounderUserId: LReferencedLeagueFounderUserId;

  readonly #establishmentDate: LeagueEstablishmentDate;

  readonly #isActive: LeagueIsActive;

  constructor(
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
    const leagueId: LeagueId = new LeagueId(id);
    const leagueCreatedAt: LeagueCreatedAt = new LeagueCreatedAt(createdAt);
    const leagueUpdatedAt: LeagueUpdatedAt = new LeagueUpdatedAt(updatedAt);

    super(leagueId, leagueCreatedAt, leagueUpdatedAt);

    this.#name = new LeagueName(name);
    this.#description = new LeagueDescription(description);
    this.#rules = new LeagueRules(rules);
    this.#level = new LeagueLevel(level);
    this.#location = new LeagueLocation(location);
    this.#leagueFounderUserId = new LReferencedLeagueFounderUserId(leagueFounderUserId);
    this.#establishmentDate = new LeagueEstablishmentDate(establishmentDate);
    this.#isActive = new LeagueIsActive(isActive);
  }

  public override toPrimitives(): ILeague {
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
}
