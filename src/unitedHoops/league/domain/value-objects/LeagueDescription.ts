import InvalidArgumentError from '../../../shared/domain/exceptions/InvalidArgumentError';
import LengthExceededError from '../../../shared/domain/exceptions/LengthExceededError';
import MinimumLengthNotMetError from '../../../shared/domain/exceptions/MinimumLengthNotMetError';
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
    super(value, 'LeagueDescription');

    this.ensureIsValidValue(value.short, { min: this.shortDescriptionLength.min, max: this.shortDescriptionLength.max }, 'short description');
    this.ensureIsValidValue(value.short, { min: this.completeDescriptionLength.min, max: this.completeDescriptionLength.max }, 'complete description');
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

export default LeagueDescription;
