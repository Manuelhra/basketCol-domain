import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';
import { LeagueFounderUserId } from '../../../users/leagueFounder/domain/value-objects/LeagueFounderUserId';
import { ILeague } from './ILeague';
import { LeagueCreatedAt } from './value-objects/LeagueCreatedAt';
import { LeagueCreationDate } from './value-objects/LeagueCreationDate';
import { LeagueDescription } from './value-objects/LeagueDescription';
import { LeagueId } from './value-objects/LeagueId';
import { LeagueIsActive } from './value-objects/LeagueIsActive';
import { LeagueLevel } from './value-objects/LeagueLevel';
import { LeagueLocation } from './value-objects/LeagueLocation';
import { LeagueName } from './value-objects/LeagueName';
import { LeagueRules } from './value-objects/LeagueRules';
import { LeagueUpdatedAt } from './value-objects/LeagueUpdatedAt';

export class League extends AggregateRoot<ILeague> {
  readonly #name: LeagueName;

  readonly #description: LeagueDescription;

  readonly #rules: LeagueRules;

  readonly #level: LeagueLevel;

  readonly #location: LeagueLocation;

  readonly #leagueFounderUserId: LeagueFounderUserId;

  readonly #creationDate: LeagueCreationDate;

  readonly #isActive: LeagueIsActive;

  constructor(
    id: string,
    name: { short: string; official: string; },
    description: { short: string; complete: string; },
    rules: string,
    level: string,
    location: ILocationValueObjectProps,
    leagueFounderUserId: string,
    creationDate: string,
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
    this.#leagueFounderUserId = new LeagueFounderUserId(leagueFounderUserId, 'leagueFounderUserId');
    this.#creationDate = new LeagueCreationDate(creationDate);
    this.#isActive = new LeagueIsActive(isActive);
  }

  public toPrimitives(): ILeague {
    return {
      id: this.id.getValue(),
      name: this.#name.getValue(),
      description: this.#description.getValue(),
      rules: this.#rules.getValue(),
      level: this.#level.getValue(),
      location: this.#location.getValue(),
      leagueFounderUserId: this.#leagueFounderUserId.getValue(),
      creationDate: this.#creationDate.getValue(),
      isActive: this.#isActive.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}
