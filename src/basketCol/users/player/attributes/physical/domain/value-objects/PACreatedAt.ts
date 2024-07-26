import { CreatedAtValueObject } from '../../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class PACreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
