import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class RACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
