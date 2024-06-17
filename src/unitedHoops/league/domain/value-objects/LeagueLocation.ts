import InvalidArgumentError from '../../../shared/domain/exceptions/InvalidArgumentError';
import ObjectValueObject from '../../../shared/domain/value-objects/ObjectValueObject';

interface Item {
  code: string;
  label: string;
}

export interface LeagueLocationProps {
  country: Item;
  department: Item;
  city: Item;
  coords: { lat: number; lng: number; };
}

class LeagueLocation extends ObjectValueObject<LeagueLocationProps> {
  constructor(value: LeagueLocationProps) {
    super(value, 'LeagueLocation');

    this.ensurePropIsDefined(value.country, 'Country');
    this.ensurePropIsDefined(value.department, 'Department');
    this.ensurePropIsDefined(value.city, 'City');
    this.ensureCoordsIsDefined(value.coords);
  }

  private ensurePropIsDefined(propValue: Item, propName: string) {
    if (propValue === null || propValue === undefined) {
      throw new InvalidArgumentError(`The ${propName} property of Location must be defined`);
    }

    if (propValue.code === null || propValue.code === undefined) {
      throw new InvalidArgumentError(`The code property of ${propName} must be defined`);
    }

    if (propValue.label === null || propValue.label === undefined) {
      throw new InvalidArgumentError(`The label property of ${propName} must be defined`);
    }

    if (typeof propValue.code !== 'string') {
      throw new InvalidArgumentError(`The code property of ${propName} must be of type string`);
    }

    if (typeof propValue.label !== 'string') {
      throw new InvalidArgumentError(`The label property of ${propName} must be of type string`);
    }
  }

  private ensureCoordsIsDefined(coords: { lat: number; lng: number; }) {
    if (coords === null || coords === undefined) {
      throw new InvalidArgumentError('Coords must be defined');
    }

    if (coords.lat === null || coords.lat === undefined) {
      throw new InvalidArgumentError('The lat property of Coords must be defined');
    }

    if (coords.lng === null || coords.lng === undefined) {
      throw new InvalidArgumentError('The lng property of Coords must be defined');
    }

    if (typeof coords.lat !== 'number') {
      throw new InvalidArgumentError('The lat field must be of type string');
    }

    if (typeof coords.lng !== 'number') {
      throw new InvalidArgumentError('The lng field must be of type string');
    }
  }
}

export default LeagueLocation;
