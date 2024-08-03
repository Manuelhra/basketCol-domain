import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class TFUUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
