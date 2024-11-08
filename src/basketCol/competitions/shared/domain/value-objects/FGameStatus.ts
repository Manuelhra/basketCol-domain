import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidFGameStatusError } from '../exceptions/InvalidFGameStatusError';

export abstract class FGameStatus extends StringValueObject {
  static readonly #VALID_STATUSES: string[] = ['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED', 'POSTPONED', 'SUSPENDED', 'RESCHEDULED'] as const;

  protected constructor(value: string) {
    super(value, 'gameStatus');

    FGameStatus.#ensureIsValidStatus(value);
  }

  static #ensureIsValidStatus(status: string): void {
    if (!FGameStatus.#VALID_STATUSES.includes(status)) {
      throw InvalidFGameStatusError.create(status, FGameStatus.#VALID_STATUSES);
    }
  }
}
