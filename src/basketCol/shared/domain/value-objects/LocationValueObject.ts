import { InvalidPropertyTypeError } from '../exceptions/InvalidPropertyTypeError';
import { ObjectValueObject } from './ObjectValueObject';

interface IItem {
  code: string;
  label: string;
}

export interface ILocationValueObjectProps {
  country: IItem;
  department: IItem;
  city: IItem;
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

  private static ensurePropIsDefined(propertyValue: IItem, propertyName: string): void {
    if (propertyValue === null || propertyValue === undefined) {
      throw InvalidPropertyTypeError.create(propertyName, '{ code: string; label: string }', typeof propertyValue);
    }

    if (propertyValue.code === null || propertyValue.code === undefined || typeof propertyValue.code !== 'string') {
      throw InvalidPropertyTypeError.create(`${propertyName}.code`, 'string', typeof propertyValue);
    }

    if (propertyValue.label === null || propertyValue.label === undefined || typeof propertyValue.label !== 'string') {
      throw InvalidPropertyTypeError.create(`${propertyName}.label`, 'string', typeof propertyValue);
    }
  }

  private static ensureCoordsIsDefined(coords: { lat: number; lng: number; }): void {
    if (coords === null || coords === undefined) {
      throw InvalidPropertyTypeError.create('coords', '{ lat: number; lng: number; }', typeof coords);
    }

    if (coords.lat === null || coords.lat === undefined || typeof coords.lat !== 'number') {
      throw InvalidPropertyTypeError.create('coords.lat', 'number', typeof coords.lat);
    }

    if (coords.lng === null || coords.lng === undefined || typeof coords.lng !== 'number') {
      throw InvalidPropertyTypeError.create('coords.lng', 'number', typeof coords.lng);
    }
  }
}
