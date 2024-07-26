import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class RefereeUserUpdatedAt extends UserUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
