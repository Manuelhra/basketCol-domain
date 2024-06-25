import InvalidPropertyTypeError from '../../../shared/domain/exceptions/InvalidPropertyTypeError';
import PropertyLengthExceededError from '../../../shared/domain/exceptions/PropertyLengthExceededError';
import PropertyLengthTooShortError from '../../../shared/domain/exceptions/PropertyLengthTooShortError';
import ObjectValueObject from '../../../shared/domain/value-objects/ObjectValueObject';

class LeagueDescription extends ObjectValueObject<{ short: string; complete: string; }> {
  private readonly shortDescriptionLength: { min: number; max: number; } = {
    min: 20,
    max: 30,
  };

  private readonly completeDescriptionLength: { min: number; max: number; } = {
    min: this.shortDescriptionLength.max + 10,
    max: 300,
  };

  constructor(value: { short: string; complete: string; }) {
    super(value, 'description', '{ short: string; complete: string; }');

    this.ensureIsValidValue(value.short, { min: this.shortDescriptionLength.min, max: this.shortDescriptionLength.max }, 'description.short');
    this.ensureIsValidValue(value.short, { min: this.completeDescriptionLength.min, max: this.completeDescriptionLength.max }, 'description.complete');
  }

  private ensureIsValidValue(
    value: string,
    length: { min:number; max: number; },
    propertyName: string,
  ): void {
    if (value === null || value === undefined || typeof value !== 'string') {
      throw new InvalidPropertyTypeError(propertyName, 'string', typeof value);
    }

    if (value.length < length.min) {
      throw new PropertyLengthTooShortError(propertyName, length.min, value.length);
    }

    if (value.length > length.max) {
      throw new PropertyLengthExceededError(propertyName, length.max, value.length);
    }
  }
}

export default LeagueDescription;
