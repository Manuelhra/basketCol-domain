import { UpdatedAtValueObject } from '../../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class PUSAUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
