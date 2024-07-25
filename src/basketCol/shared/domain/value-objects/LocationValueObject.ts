import { InvalidPropertyTypeError } from '../exceptions/InvalidPropertyTypeError';
import { ObjectValueObject } from './ObjectValueObject';

interface Item {
  code: string;
  label: string;
}

export interface ILocationValueObjectProps {
  country: Item;
  department: Item;
  city: Item;
  coords: { lat: number; lng: number; };
}

export abstract class LocationValueObject extends ObjectValueObject<ILocationValueObjectProps> {
  protected constructor(value: ILocationValueObjectProps) {
    super(value, 'location', '{ country: Item; department: Item; city: Item; coords: { lat: number; lng: number } } - Item { code: string; label: string; } ');

    LocationValueObject.ensurePropIsDefined(value.country, 'country');
    LocationValueObject.ensurePropIsDefined(value.department, 'department');
    LocationValueObject.ensurePropIsDefined(value.city, 'city');
    LocationValueObject.ensureCoordsIsDefined(value.coords);
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
