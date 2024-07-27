import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class HostUserUpdatedAt extends UserUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
