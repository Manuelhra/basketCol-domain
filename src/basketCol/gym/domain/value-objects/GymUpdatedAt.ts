import { UpdatedAtValueObject } from '../../../shared/domain/value-objects/UpdatedAtValueObject';

export class GymUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
