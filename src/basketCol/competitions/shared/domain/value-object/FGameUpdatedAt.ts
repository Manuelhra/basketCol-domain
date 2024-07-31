import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export abstract class FGameUpdatedAt extends UpdatedAtValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
