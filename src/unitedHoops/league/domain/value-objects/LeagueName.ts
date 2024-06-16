import InvalidArgumentError from '../../../shared/domain/exceptions/InvalidArgumentError';
import ObjectValueObject from '../../../shared/domain/value-objects/ObjectValueObject';
import OfficialNameMaxLengthExceededError from '../exceptions/OfficialNameMaxLengthExceededError';
import OfficialNameMinLengthNotMetError from '../exceptions/OfficialNameMinLengthNotMetError';
import ShortNameMaxLengthExceededError from '../exceptions/ShortNameMaxLengthExceededError';

class LeagueName extends ObjectValueObject<{ short: string; official: string; }> {
  private readonly maxShortNameLength: number = 10;

  private readonly officialNameLength: { min: number; max: number; } = {
    min: this.maxShortNameLength,
    max: 100,
  };

  constructor(value: { short: string; official: string; }) {
    super(value, 'Name');

    this.ensureIsValidShortNameValue(value.short);
    this.ensureIsValidOfficialNameValue(value.official);
  }

  private ensureIsValidShortNameValue(value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('shortName value must be defined');
    }

    if (value.length > this.maxShortNameLength) {
      throw new ShortNameMaxLengthExceededError();
    }
  }

  private ensureIsValidOfficialNameValue(value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('officialName value must be defined');
    }

    if (value.length < this.officialNameLength.min) {
      throw new OfficialNameMinLengthNotMetError();
    }

    if (value.length > this.officialNameLength.max) {
      throw new OfficialNameMaxLengthExceededError();
    }
  }
}

export default LeagueName;
