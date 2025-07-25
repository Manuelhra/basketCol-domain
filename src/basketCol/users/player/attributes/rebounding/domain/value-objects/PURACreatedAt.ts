import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PURACreatedAt extends CreatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PURACreatedAt {
    return new PURACreatedAt(value);
  }
}
