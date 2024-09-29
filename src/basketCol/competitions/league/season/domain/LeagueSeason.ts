import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { ILeagueSeasonPrimitives } from './ILeagueSeasonPrimitives';
import { LeagueSeasonEndDateBeforeStartDateError } from './exceptions/LeagueSeasonEndDateBeforeStartDateError';
import { LeagueSeasonEndDateInPastError } from './exceptions/LeagueSeasonEndDateInPastError';
import { LeagueSeasonInsufficientDurationError } from './exceptions/LeagueSeasonInsufficientDurationError';
import { LeagueSeasonInsufficientPreparationTimeError } from './exceptions/LeagueSeasonInsufficientPreparationTimeError';
import { LeagueSeasonStartDateInPastError } from './exceptions/LeagueSeasonStartDateInPastError';
import { LSReferencedCourtIdList } from './value-objects/LSReferencedCourtIdList';
import { LSReferencedLeagueId } from './value-objects/LSReferencedLeagueId';
import { LeagueSeasonCreatedAt } from './value-objects/LeagueSeasonCreatedAt';
import { LeagueSeasonEndDate } from './value-objects/LeagueSeasonEndDate';
import { LeagueSeasonId } from './value-objects/LeagueSeasonId';
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

  readonly #courtIdList: LSReferencedCourtIdList;

  readonly #leagueId: LSReferencedLeagueId;

  constructor(
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
    this.#courtIdList = LSReferencedCourtIdList.create(courtIdList);
    this.#leagueId = LSReferencedLeagueId.create(leagueId);

    this.validateDates();
  }

  public override toPrimitives(): ILeagueSeasonPrimitives {
    return {
      id: this.id.value,
      name: this.#name.value,
      startDate: this.#startDate.value,
      endDate: this.#endDate.value,
      status: this.#status.value,
      leagueId: this.#leagueId.leagueIdAsString,
      courtIdList: this.#courtIdList.courtIdListAsStrings,
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

  private validateDates(): void {
    const now = this.getCurrentDateString();

    this.validateStartDateAfterPresent(now);
    this.validateEndDateAfterPresent(now);
    this.validateStartDateHasPreparationTime(now);
    this.validateEndDateAfterStartDate();
    this.validateMinimumSeasonDuration();
  }

  private validateStartDateAfterPresent(now: string): void {
    if (this.compareDates(this.#startDate.value, now) <= 0) {
      throw new LeagueSeasonStartDateInPastError(this.#startDate.value, now);
    }
  }

  private validateEndDateAfterPresent(now: string): void {
    if (this.compareDates(this.#endDate.value, now) <= 0) {
      throw new LeagueSeasonEndDateInPastError(this.#endDate.value, now);
    }
  }

  private validateStartDateHasPreparationTime(now: string): void {
    const minimumStartDate = this.addDaysToDateString(now, LeagueSeason.#MINIMUM_PREPARATION_DAYS);
    if (this.compareDates(this.#startDate.value, minimumStartDate) < 0) {
      throw new LeagueSeasonInsufficientPreparationTimeError(this.#startDate.value, minimumStartDate, LeagueSeason.#MINIMUM_PREPARATION_DAYS);
    }
  }

  private validateEndDateAfterStartDate(): void {
    if (this.compareDates(this.#endDate.value, this.#startDate.value) <= 0) {
      throw new LeagueSeasonEndDateBeforeStartDateError(this.#startDate.value, this.#endDate.value);
    }
  }

  private validateMinimumSeasonDuration(): void {
    const minimumEndDate = this.addDaysToDateString(this.#startDate.value, LeagueSeason.#MINIMUM_SEASON_DURATION_DAYS);
    if (this.compareDates(this.#endDate.value, minimumEndDate) < 0) {
      throw new LeagueSeasonInsufficientDurationError(this.#startDate.value, this.#endDate.value, LeagueSeason.#MINIMUM_SEASON_DURATION_DAYS);
    }
  }

  private getCurrentDateString(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private addDaysToDateString(dateString: string, days: number): string {
    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + days);
    return this.formatDate(date);
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private compareDates(date1: string, date2: string): number {
    const [day1, month1, year1] = date1.split('/').map(Number);
    const [day2, month2, year2] = date2.split('/').map(Number);

    if (year1 !== year2) return year1 - year2;
    if (month1 !== month2) return month1 - month2;
    return day1 - day2;
  }
}
