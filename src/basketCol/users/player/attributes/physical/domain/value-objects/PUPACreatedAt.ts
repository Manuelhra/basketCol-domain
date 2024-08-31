import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PUPACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
