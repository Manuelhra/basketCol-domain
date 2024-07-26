import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class DACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
