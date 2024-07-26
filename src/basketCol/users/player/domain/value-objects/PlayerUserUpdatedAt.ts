import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class PlayerUserUpdatedAt extends UserUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
