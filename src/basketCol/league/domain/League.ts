import AggregateRoot from '../../shared/domain/AggregateRoot';
import LeagueFounderUserId from '../../users/leagueFounder/domain/value-objects/LeagueFounderUserId';
import { ILeague } from './ILeague';
import LeagueCreationDate from './value-objects/LeagueCreationDate';
import LeagueDescription from './value-objects/LeagueDescription';
import LeagueId from './value-objects/LeagueId';
import LeagueIsActive from './value-objects/LeagueIsActive';
import LeagueLevel from './value-objects/LeagueLevel';
import LeagueLocation, { ILeagueLocationProps } from './value-objects/LeagueLocation';
import LeagueName from './value-objects/LeagueName';
import LeagueRules from './value-objects/LeagueRules';

class League extends AggregateRoot<ILeague> {
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
    location: ILeagueLocationProps,
    leagueFounderUserId: string,
    creationDate: string,
    isActive: boolean,
  ) {
    super(new LeagueId(id));

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
    };
  }
}

export default League;
