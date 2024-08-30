import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PURACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
