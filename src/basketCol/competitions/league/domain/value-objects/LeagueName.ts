import { InvalidPropertyTypeError } from '../../../../shared/domain/exceptions/InvalidPropertyTypeError';
import { PropertyLengthExceededError } from '../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { ObjectValueObject } from '../../../../shared/domain/value-objects/ObjectValueObject';

export class LeagueName extends ObjectValueObject<{ short: string; official: string; }> {
  static readonly #SHORT_NAME_LENGTH: { min: number; max: number; } = {
    min: 5,
    max: 10,
  } as const;

  static readonly #OFFICIAL_NAME_LENGTH: { min: number; max: number; } = {
    min: LeagueName.#SHORT_NAME_LENGTH.max + 10,
    max: 100,
  } as const;

  constructor(value: { short: string; official: string; }) {
    super(value, 'name', '{ short: string; official: string; }');

    LeagueName.ensureIsValidValue(value.short, { min: LeagueName.#SHORT_NAME_LENGTH.min, max: LeagueName.#SHORT_NAME_LENGTH.max }, 'short');
    LeagueName.ensureIsValidValue(value.official, { min: LeagueName.#OFFICIAL_NAME_LENGTH.min, max: LeagueName.#OFFICIAL_NAME_LENGTH.max }, 'official');
  }

  private static ensureIsValidValue(
    value: string,
    length: { min:number; max: number; },
    propertyName: string,
  ): void {
    if (value === null || value === undefined || typeof value !== 'string') {
      throw new InvalidPropertyTypeError(`name.${propertyName}`, 'string', typeof value);
    }

    if (value.length < length.min) {
      throw new PropertyLengthTooShortError(`name.${propertyName}`, length.min, value.length);
    }

    if (value.length > length.max) {
      throw new PropertyLengthExceededError(`name.${propertyName}`, length.max, value.length);
    }
  }
}
