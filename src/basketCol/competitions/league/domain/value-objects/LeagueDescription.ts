import { InvalidPropertyTypeError } from '../../../../shared/domain/exceptions/InvalidPropertyTypeError';
import { PropertyLengthExceededError } from '../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { ObjectValueObject } from '../../../../shared/domain/value-objects/ObjectValueObject';

export class LeagueDescription extends ObjectValueObject<{ short: string; complete: string; }> {
  static readonly #SHORT_DESCRIPTION_LENGTH: { min: number; max: number; } = {
    min: 20,
    max: 30,
  } as const;

  static readonly #COMPLETE_DESCRIPTION_LENGTH: { min: number; max: number; } = {
    min: LeagueDescription.#SHORT_DESCRIPTION_LENGTH.max + 10,
    max: 300,
  } as const;

  private constructor(value: { short: string; complete: string; }) {
    super(value, 'description', '{ short: string; complete: string; }');

    LeagueDescription.#ensureIsValidValue(value.short, { min: LeagueDescription.#SHORT_DESCRIPTION_LENGTH.min, max: LeagueDescription.#SHORT_DESCRIPTION_LENGTH.max }, 'description.short');
    LeagueDescription.#ensureIsValidValue(value.short, { min: LeagueDescription.#COMPLETE_DESCRIPTION_LENGTH.min, max: LeagueDescription.#COMPLETE_DESCRIPTION_LENGTH.max }, 'description.complete');
  }

  public static create(value: { short: string; complete: string; }): LeagueDescription {
    return new LeagueDescription(value);
  }

  static #ensureIsValidValue(
    value: string,
    length: { min:number; max: number; },
    propertyName: string,
  ): void {
    if (value === null || value === undefined || typeof value !== 'string') {
      throw InvalidPropertyTypeError.create(propertyName, 'string', typeof value);
    }

    if (value.length < length.min) {
      throw PropertyLengthTooShortError.create(propertyName, length.min, value.length);
    }

    if (value.length > length.max) {
      throw PropertyLengthExceededError.create(propertyName, length.max, value.length);
    }
  }
}
