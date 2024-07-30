import { RootError } from '../../../../../../shared/domain/exceptions/RootError';

export class GameDateTooSoonError extends RootError {
  constructor(date: string) {
    const message = `Invalid game date: '${date}'. The game date must be at least 12 hours in the future.`;
    super(message);
    this.name = 'GameDateTooSoonError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
