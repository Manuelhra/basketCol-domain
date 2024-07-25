import { ObjectValueObject } from './ObjectValueObject';

interface ICentimeterHeightValueObjectProps {
  value: number;
  unit: string;
}

export abstract class CentimeterHeightValueObject extends ObjectValueObject<ICentimeterHeightValueObjectProps> {
  protected constructor(value: number, propertyName: string) {
    super({ value, unit: 'cm' }, propertyName, '{ value: number; unit: string }');
  }
}
