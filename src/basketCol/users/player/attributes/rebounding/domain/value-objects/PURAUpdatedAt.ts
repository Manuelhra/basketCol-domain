import { UpdatedAtValueObject } from '../../../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class PURAUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
