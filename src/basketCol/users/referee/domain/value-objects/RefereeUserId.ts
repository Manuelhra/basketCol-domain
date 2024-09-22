import { UserId } from '../../../shared/domain/value-objects/UserId';

export class RefereeUserId extends UserId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserId {
    return new RefereeUserId(value);
  }
}
