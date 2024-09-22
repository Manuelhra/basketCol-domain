import { FixtureDate } from '../../../../../shared/domain/value-objects/FixtureDate';
import { FixtureDateTooSoonError } from '../exceptions/FixtureDateTooSoonError';

export class LSFixtureDate extends FixtureDate {
  public constructor(value: string) {
    super(value);

    this.ensureFixtureDateIsAtLeast12HoursInAdvance();
  }

  public static create(value: string): LSFixtureDate {
    return new LSFixtureDate(value);
  }

  private ensureFixtureDateIsAtLeast12HoursInAdvance(): void {
    const gameDate = this.toDate();
    const currentDate = new Date();
    const minimumDate = new Date(currentDate.getTime() + 12 * 60 * 60 * 1000);

    const formattedFixtureDate = FixtureDate.fromDate(gameDate);
    const formattedMinimumDate = FixtureDate.fromDate(minimumDate);

    if (formattedFixtureDate.value <= formattedMinimumDate.value) {
      throw new FixtureDateTooSoonError(this.value);
    }
  }
}
