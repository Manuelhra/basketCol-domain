import { CreatedAtValueObject } from '../../../../shared/domain/value-objects/CreatedAtValueObject';

export class TFUCreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
