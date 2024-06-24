import InvalidPropertyTypeError from '../../../shared/domain/exceptions/InvalidPropertyTypeError';
import PropertyLengthExceededError from '../../../shared/domain/exceptions/PropertyLengthExceededError';
import PropertyLengthTooShortError from '../../../shared/domain/exceptions/PropertyLengthTooShortError';
import ObjectValueObject from '../../../shared/domain/value-objects/ObjectValueObject';

class LeagueName extends ObjectValueObject<{ short: string; official: string; }> {
  private readonly shortNameLength: { min: number; max: number; } = {
    min: 5,
    max: 10,
  };

  private readonly officialNameLength: { min: number; max: number; } = {
    min: this.shortNameLength.max + 10,
    max: 100,
  };

  constructor(value: { short: string; official: string; }) {
    super(value, 'LeagueName');

    this.ensureIsValidValue(value.short, { min: this.shortNameLength.min, max: this.shortNameLength.max }, 'short');
    this.ensureIsValidValue(value.official, { min: this.officialNameLength.min, max: this.officialNameLength.max }, 'official');
  }

  private ensureIsValidValue(
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

export default LeagueName;
