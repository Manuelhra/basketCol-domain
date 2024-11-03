import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUDAInteriorDefense extends SubAttribute {
  private constructor(value: number) {
    super(value, 'interiorDefense');
  }

  public static create(value: number): PUDAInteriorDefense {
    return new PUDAInteriorDefense(value);
  }
}
