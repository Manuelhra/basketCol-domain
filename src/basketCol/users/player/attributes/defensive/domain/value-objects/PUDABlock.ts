import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUDABlock extends Attribute {
  constructor(value: number) {
    super(value, 'block');
  }

  public static create(value: number): PUDABlock {
    return new PUDABlock(value);
  }
}
