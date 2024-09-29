import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUDAPerimeterDefense extends Attribute {
  private constructor(value: number) {
    super(value, 'perimeterDefense');
  }

  public static create(value: number): PUDAPerimeterDefense {
    return new PUDAPerimeterDefense(value);
  }
}
