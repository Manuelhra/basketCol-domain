import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class PlayerUserCreatedAt extends UserCreatedAt {
  public constructor(value: string) {
    super(value);
  }
}
