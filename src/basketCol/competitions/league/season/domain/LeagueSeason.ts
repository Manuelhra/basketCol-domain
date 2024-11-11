import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { ILeagueSeasonPrimitives } from './ILeagueSeasonPrimitives';
import { LeagueSeasonEndDateBeforeStartDateError } from './exceptions/LeagueSeasonEndDateBeforeStartDateError';
import { LeagueSeasonEndDateInPastError } from './exceptions/LeagueSeasonEndDateInPastError';
import { LeagueSeasonInsufficientDurationError } from './exceptions/LeagueSeasonInsufficientDurationError';
import { LeagueSeasonInsufficientPreparationTimeError } from './exceptions/LeagueSeasonInsufficientPreparationTimeError';
import { LeagueSeasonStartDateInPastError } from './exceptions/LeagueSeasonStartDateInPastError';
import { LeagueSeasonCourtIdList } from './value-objects/LeagueSeasonCourtIdList';
import { LeagueSeasonCreatedAt } from './value-objects/LeagueSeasonCreatedAt';
import { LeagueSeasonEndDate } from './value-objects/LeagueSeasonEndDate';
import { LeagueSeasonId } from './value-objects/LeagueSeasonId';
import { LeagueSeasonLeagueId } from './value-objects/LeagueSeasonLeagueId';
import { LeagueSeasonName } from './value-objects/LeagueSeasonName';
import { LeagueSeasonStartDate } from './value-objects/LeagueSeasonStartDate';
import { LeagueSeasonStatus } from './value-objects/LeagueSeasonStatus';
import { LeagueSeasonUpdatedAt } from './value-objects/LeagueSeasonUpdatedAt';

export class LeagueSeason extends AggregateRoot<ILeagueSeasonPrimitives> {
  static readonly #MINIMUM_PREPARATION_DAYS = 10 as const;

  static readonly #MINIMUM_SEASON_DURATION_DAYS = 5 as const;

  readonly #name: LeagueSeasonName;

  readonly #startDate: LeagueSeasonStartDate;

  readonly #endDate: LeagueSeasonEndDate;

  readonly #status: LeagueSeasonStatus;

  readonly #courtIdList: LeagueSeasonCourtIdList;

  readonly #leagueId: LeagueSeasonLeagueId;

  private constructor(
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    status: string,
    courtIdList: string[],
    leagueId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const leagueSeasonId: LeagueSeasonId = LeagueSeasonId.create(id);
    const leagueSeasonCreatedAt: LeagueSeasonCreatedAt = LeagueSeasonCreatedAt.create(createdAt);
    const leagueSeasonUpdatedAt: LeagueSeasonUpdatedAt = LeagueSeasonUpdatedAt.create(updatedAt);

    super(leagueSeasonId, leagueSeasonCreatedAt, leagueSeasonUpdatedAt);

    this.#name = LeagueSeasonName.create(name);
    this.#startDate = LeagueSeasonStartDate.create(startDate);
    this.#endDate = LeagueSeasonEndDate.create(endDate);
    this.#status = LeagueSeasonStatus.create(status);
    this.#courtIdList = LeagueSeasonCourtIdList.create(courtIdList);
    this.#leagueId = LeagueSeasonLeagueId.create(leagueId);

    this.#validateDates();
  }

  public override get toPrimitives(): ILeagueSeasonPrimitives {
    return {
      id: this.id.value,
      name: this.#name.value,
      startDate: this.#startDate.value,
      endDate: this.#endDate.value,
      status: this.#status.value,
      leagueId: this.#leagueId.value,
      courtIdList: this.#courtIdList.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    status: string,
    courtIdList: string[],
    leagueId: string,
    createdAt: string,
    updatedAt: string,
  ): LeagueSeason {
    return new LeagueSeason(
      id,
      name,
      startDate,
      endDate,
      status,
      courtIdList,
      leagueId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    status: string,
    courtIdList: string[],
    leagueId: string,
    createdAt: string,
    updatedAt: string,
  ): LeagueSeason {
    return new LeagueSeason(
      id,
      name,
      startDate,
      endDate,
      status,
      courtIdList,
      leagueId,
      createdAt,
      updatedAt,
    );
  }

  #validateDates(): void {
    const now = this.#getCurrentDateString();

    this.#validateStartDateAfterPresent(now);
    this.#validateEndDateAfterPresent(now);
    this.#validateStartDateHasPreparationTime(now);
    this.#validateEndDateAfterStartDate();
    this.#validateMinimumSeasonDuration();
  }

  #validateStartDateAfterPresent(now: string): void {
    if (this.#compareDates(this.#startDate.value, now) <= 0) {
      throw LeagueSeasonStartDateInPastError.create(this.#startDate.value, now);
    }
  }

  #validateEndDateAfterPresent(now: string): void {
    if (this.#compareDates(this.#endDate.value, now) <= 0) {
      throw LeagueSeasonEndDateInPastError.create(this.#endDate.value, now);
    }
  }

  #validateStartDateHasPreparationTime(now: string): void {
    const minimumStartDate = this.#addDaysToDateString(now, LeagueSeason.#MINIMUM_PREPARATION_DAYS);
    if (this.#compareDates(this.#startDate.value, minimumStartDate) < 0) {
      throw LeagueSeasonInsufficientPreparationTimeError.create(this.#startDate.value, minimumStartDate, LeagueSeason.#MINIMUM_PREPARATION_DAYS);
    }
  }

  #validateEndDateAfterStartDate(): void {
    if (this.#compareDates(this.#endDate.value, this.#startDate.value) <= 0) {
      throw LeagueSeasonEndDateBeforeStartDateError.create(this.#startDate.value, this.#endDate.value);
    }
  }

  #validateMinimumSeasonDuration(): void {
    const minimumEndDate = this.#addDaysToDateString(this.#startDate.value, LeagueSeason.#MINIMUM_SEASON_DURATION_DAYS);
    if (this.#compareDates(this.#endDate.value, minimumEndDate) < 0) {
      throw LeagueSeasonInsufficientDurationError.create(this.#startDate.value, this.#endDate.value, LeagueSeason.#MINIMUM_SEASON_DURATION_DAYS);
    }
  }

  #getCurrentDateString(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  #addDaysToDateString(dateString: string, days: number): string {
    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + days);
    return this.#formatDate(date);
  }

  #formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  #compareDates(date1: string, date2: string): number {
    const [day1, month1, year1] = date1.split('/').map(Number);
    const [day2, month2, year2] = date2.split('/').map(Number);

    if (year1 !== year2) return year1 - year2;
    if (month1 !== month2) return month1 - month2;
    return day1 - day2;
  }
}
