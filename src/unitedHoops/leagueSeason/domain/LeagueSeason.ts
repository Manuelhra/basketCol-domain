import AggregateRoot from '../../shared/domain/AggregateRoot';
import { PlainLeagueSeasonData } from './PlainLeagueSeasonData';
import LeagueSeasonEndDate from './value-objects/LeagueSeasonEndDate';
import LeagueSeasonId from './value-objects/LeagueSeasonId';
import LeagueSeasonName from './value-objects/LeagueSeasonName';
import LeagueSeasonStartDate from './value-objects/LeagueSeasonStartDate';
import LeagueSeasonStatus from './value-objects/LeagueSeasonStatus';

class LeagueSeason extends AggregateRoot {
  static readonly #MINIMUM_PREPARATION_DAYS = 10 as const;

  static readonly #MINIMUM_SEASON_DURATION_DAYS = 5 as const;

  readonly #name: LeagueSeasonName;

  readonly #startDate: LeagueSeasonStartDate;

  readonly #endDate: LeagueSeasonEndDate;

  readonly #status: LeagueSeasonStatus;

  constructor(
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    status: string,
  ) {
    super(new LeagueSeasonId(id));

    // TODO: Agregar validación para saber que le fecha end es porterior a la actual
    // y que la fecha start es posterior a la presente

    this.#name = new LeagueSeasonName(name);
    this.#startDate = new LeagueSeasonStartDate(startDate);
    this.#endDate = new LeagueSeasonEndDate(endDate);
    this.#status = new LeagueSeasonStatus(status);
  }

  public toPrimitives(): PlainLeagueSeasonData {
    return {
      id: this.id.getValue(),
      name: this.#name.getValue(),
      startDate: this.#startDate.getValue(),
      endDate: this.#endDate.getValue(),
      status: this.#status.getValue(),
    };
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
    if (this.compareDates(this.#startDate.getValue(), now) <= 0) {
      throw new Error('Start date must be in the future');
    }
  }

  private validateEndDateAfterPresent(now: string): void {
    if (this.compareDates(this.#endDate.getValue(), now) <= 0) {
      throw new Error('End date must be in the future');
    }
  }

  private validateStartDateHasPreparationTime(now: string): void {
    const minimumStartDate = this.addDaysToDateString(now, LeagueSeason.#MINIMUM_PREPARATION_DAYS);
    if (this.compareDates(this.#startDate.getValue(), minimumStartDate) < 0) {
      throw new Error(`Start date must be at least ${LeagueSeason.#MINIMUM_PREPARATION_DAYS} days in the future`);
    }
  }

  private validateEndDateAfterStartDate(): void {
    if (this.compareDates(this.#endDate.getValue(), this.#startDate.getValue()) <= 0) {
      throw new Error('End date must be after start date');
    }
  }

  private validateMinimumSeasonDuration(): void {
    const minimumEndDate = this.addDaysToDateString(this.#startDate.getValue(), LeagueSeason.#MINIMUM_SEASON_DURATION_DAYS);
    if (this.compareDates(this.#endDate.getValue(), minimumEndDate) < 0) {
      throw new Error(`Season must last at least ${LeagueSeason.#MINIMUM_SEASON_DURATION_DAYS} days`);
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

export default LeagueSeason;
