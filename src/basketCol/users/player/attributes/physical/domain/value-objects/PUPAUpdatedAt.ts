import { UpdatedAtValueObject } from '../../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class PUPAUpdatedAt extends UpdatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUPAUpdatedAt {
    return new PUPAUpdatedAt(value);
  }
}
