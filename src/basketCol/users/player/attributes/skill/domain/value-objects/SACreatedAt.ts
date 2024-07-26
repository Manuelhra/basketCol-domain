import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class SACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
