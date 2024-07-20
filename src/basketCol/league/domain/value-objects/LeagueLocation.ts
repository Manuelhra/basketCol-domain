import { InvalidPropertyTypeError } from '../../../shared/domain/exceptions/InvalidPropertyTypeError';
import { ObjectValueObject } from '../../../shared/domain/value-objects/ObjectValueObject';

interface Item {
  code: string;
  label: string;
}

export interface ILeagueLocationProps {
  country: Item;
  department: Item;
  city: Item;
  coords: { lat: number; lng: number; };
}

export class LeagueLocation extends ObjectValueObject<ILeagueLocationProps> {
  constructor(value: ILeagueLocationProps) {
    super(value, 'location', '{ country: Item; department: Item; city: Item; coords: { lat: number; lng: number } } - Item { code: string; label: string; } ');

    LeagueLocation.ensurePropIsDefined(value.country, 'country');
    LeagueLocation.ensurePropIsDefined(value.department, 'department');
    LeagueLocation.ensurePropIsDefined(value.city, 'city');
    LeagueLocation.ensureCoordsIsDefined(value.coords);
  }

  private static ensurePropIsDefined(propertyValue: Item, propertyName: string): void {
    if (propertyValue === null || propertyValue === undefined) {
      throw new InvalidPropertyTypeError(propertyName, '{ code: string; label: string }', typeof propertyValue);
    }

    if (propertyValue.code === null || propertyValue.code === undefined || typeof propertyValue.code !== 'string') {
      throw new InvalidPropertyTypeError(`${propertyName}.code`, 'string', typeof propertyValue);
    }

    if (propertyValue.label === null || propertyValue.label === undefined || typeof propertyValue.label !== 'string') {
      throw new InvalidPropertyTypeError(`${propertyName}.label`, 'string', typeof propertyValue);
    }
  }

  private static ensureCoordsIsDefined(coords: { lat: number; lng: number; }): void {
    if (coords === null || coords === undefined) {
      throw new InvalidPropertyTypeError('coords', '{ lat: number; lng: number; }', typeof coords);
    }

    if (coords.lat === null || coords.lat === undefined || typeof coords.lat !== 'number') {
      throw new InvalidPropertyTypeError('coords.lat', 'number', typeof coords.lat);
    }

    if (coords.lng === null || coords.lng === undefined || typeof coords.lng !== 'number') {
      throw new InvalidPropertyTypeError('coords.lng', 'number', typeof coords.lng);
    }
  }
}

