import { InvalidCentimeterHeightError } from '../exceptions/InvalidCentimeterHeightError';
import { ObjectValueObject } from './ObjectValueObject';

interface ICentimeterHeightValueObjectProps {
  value: number;
  unit: string;
}

export abstract class CentimeterHeightValueObject extends ObjectValueObject<ICentimeterHeightValueObjectProps> {
  protected constructor(value: number, propertyName: string) {
    super({ value: CentimeterHeightValueObject.ensureValidHeight(value), unit: 'cm' }, propertyName, '{ value: number; unit: string }');
  }

  private static ensureValidHeight(value: number): number {
    if (value < 0 || !Number.isInteger(value)) {
      throw InvalidCentimeterHeightError.create(value);
    }
    return value;
  }

  public get heightInCentimeters(): number {
    return this.value.value;
  }
}
