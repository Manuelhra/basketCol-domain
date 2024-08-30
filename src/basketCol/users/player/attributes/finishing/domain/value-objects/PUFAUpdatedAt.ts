import { UpdatedAtValueObject } from '../../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class PUFAUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
