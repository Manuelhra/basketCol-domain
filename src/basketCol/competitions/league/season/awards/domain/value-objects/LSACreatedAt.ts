import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class LSACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSACreatedAt {
    return new LSACreatedAt(value);
  }
}
