import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PUDACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
