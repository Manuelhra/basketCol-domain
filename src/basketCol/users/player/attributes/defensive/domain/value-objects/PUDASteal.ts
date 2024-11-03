import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUDASteal extends SubAttribute {
  private constructor(value: number) {
    super(value, 'steal');
  }

  public static create(value: number): PUDASteal {
    return new PUDASteal(value);
  }
}
