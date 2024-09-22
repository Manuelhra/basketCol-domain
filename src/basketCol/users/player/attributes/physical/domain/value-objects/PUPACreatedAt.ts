import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PUPACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PUPACreatedAt {
    return new PUPACreatedAt(value);
  }
}
