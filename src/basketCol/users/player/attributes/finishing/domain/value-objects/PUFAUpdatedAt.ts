import { UpdatedAtValueObject } from '../../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class PUFAUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUFAUpdatedAt {
    return new PUFAUpdatedAt(value);
  }
}
