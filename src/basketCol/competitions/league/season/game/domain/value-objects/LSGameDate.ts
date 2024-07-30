import { GameDate } from '../../../../../shared/domain/value-object/GameDate';
import { GameDateTooSoonError } from '../exceptions/GameDateTooSoonError';

export class LSGameDate extends GameDate {
  public constructor(value: string) {
    super(value);

    this.ensureGameDateIsAtLeast12HoursInAdvance();
  }

  private ensureGameDateIsAtLeast12HoursInAdvance(): void {
    const gameDate = this.toDate();
    const currentDate = new Date();
    const minimumDate = new Date(currentDate.getTime() + 12 * 60 * 60 * 1000);

    const formattedGameDate = GameDate.fromDate(gameDate);
    const formattedMinimumDate = GameDate.fromDate(minimumDate);

    if (formattedGameDate.value <= formattedMinimumDate.value) {
      throw new GameDateTooSoonError(this.value);
    }
  }
}
