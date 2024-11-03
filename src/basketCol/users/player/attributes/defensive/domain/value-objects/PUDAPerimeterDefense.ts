import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUDAPerimeterDefense extends SubAttribute {
  private constructor(value: number) {
    super(value, 'perimeterDefense');
  }

  public static create(value: number): PUDAPerimeterDefense {
    return new PUDAPerimeterDefense(value);
  }
}
