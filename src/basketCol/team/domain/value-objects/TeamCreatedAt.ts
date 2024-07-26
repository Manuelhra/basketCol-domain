import { CreatedAtValueObject } from '../../../shared/domain/value-objects/CreatedAtValueObject';

export class TeamCreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }
}
