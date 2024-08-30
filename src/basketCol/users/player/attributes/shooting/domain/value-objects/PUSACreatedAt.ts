import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PUSACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
