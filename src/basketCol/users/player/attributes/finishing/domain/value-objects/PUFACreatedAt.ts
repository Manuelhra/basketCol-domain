import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PUFACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
