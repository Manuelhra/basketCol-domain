import { UpdatedAtValueObject } from '../../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class PUDAUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUDAUpdatedAt {
    return new PUDAUpdatedAt(value);
  }
}
