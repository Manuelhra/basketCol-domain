import { CreatedAtValueObject } from '../../../../shared/domain/value-objects/CreatedAtValueObject';

export abstract class FGameCreatedAt extends CreatedAtValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
