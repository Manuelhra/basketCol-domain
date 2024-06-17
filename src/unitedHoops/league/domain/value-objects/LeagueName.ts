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

    this.ensureIsValidShortNameValue(value.short);
    this.ensureIsValidOfficialNameValue(value.official);
  }

  private ensureIsValidShortNameValue(value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError("The league's short name is required");
    }

    if (value.length < this.shortNameLength.min) {
      throw new MinimumLengthNotMetError('Short name');
    }

    if (value.length > this.shortNameLength.max) {
      throw new LengthExceededError('Short name');
    }
  }

  private ensureIsValidOfficialNameValue(value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError("The league's official name is required");
    }

    if (value.length < this.officialNameLength.min) {
      throw new MinimumLengthNotMetError('Official name');
    }

    if (value.length > this.officialNameLength.max) {
      throw new LengthExceededError('Official name');
    }
  }
}

export default LeagueName;
