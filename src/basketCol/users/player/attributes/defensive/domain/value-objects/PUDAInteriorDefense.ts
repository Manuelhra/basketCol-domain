import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUDAInteriorDefense extends Attribute {
  private constructor(value: number) {
    super(value, 'interiorDefense');
  }

  public static create(value: number): PUDAInteriorDefense {
    return new PUDAInteriorDefense(value);
  }
}
