import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class FACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
