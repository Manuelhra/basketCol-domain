import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUDASteal extends Attribute {
  private constructor(value: number) {
    super(value, 'steal');
  }

  public static create(value: number): PUDASteal {
    return new PUDASteal(value);
  }
}
