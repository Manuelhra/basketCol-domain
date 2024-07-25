import { CreatedAtValueObject } from '../../../shared/domain/value-objects/CreatedAtValueObject';

export class GymCreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
