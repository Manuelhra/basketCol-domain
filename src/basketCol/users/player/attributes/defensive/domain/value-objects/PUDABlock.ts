import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUDABlock extends SubAttribute {
  private constructor(value: number) {
    super(value, 'block');
  }

  public static create(value: number): PUDABlock {
    return new PUDABlock(value);
  }
}
