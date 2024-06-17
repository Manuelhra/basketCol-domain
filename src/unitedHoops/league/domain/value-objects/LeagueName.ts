import InvalidArgumentError from '../../../shared/domain/exceptions/InvalidArgumentError';
import LengthExceededError from '../../../shared/domain/exceptions/LengthExceededError';
import MinimumLengthNotMetError from '../../../shared/domain/exceptions/MinimumLengthNotMetError';
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

    this.ensureIsValidValue(value.short, { min: this.shortNameLength.min, max: this.shortNameLength.max }, 'short name');
    this.ensureIsValidValue(value.official, { min: this.officialNameLength.min, max: this.officialNameLength.max }, 'official name');
  }

  private ensureIsValidValue(
    value: string,
    length: { min:number; max: number; },
    label: string,
  ): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError(`The league's ${label} is required`);
    }

    if (value.length < length.min) {
      throw new MinimumLengthNotMetError(this.capitalizeFirstLetter(label));
    }

    if (value.length > length.max) {
      throw new LengthExceededError(this.capitalizeFirstLetter(label));
    }
  }

  private capitalizeFirstLetter(str: string): string {
    if (str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

export default LeagueName;
