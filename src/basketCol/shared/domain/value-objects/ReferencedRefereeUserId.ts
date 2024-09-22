import { RefereeUserId } from '../../../users/referee/domain/value-objects/RefereeUserId';
import { InvalidRefereeUserIdInstanceError } from '../exceptions/InvalidRefereeUserIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedRefereeUserId extends ValueObject<RefereeUserId> {
  protected constructor(value: string, propertyName: string = 'refereeUserId') {
    const refereeUserId: RefereeUserId = RefereeUserId.create(value);

    super(refereeUserId, propertyName, 'string');

    ReferencedRefereeUserId.ensureIsRefereeUserId(refereeUserId);
  }

  public get refereeUserIdAsString(): string {
    return this.value.value;
  }

  private static ensureIsRefereeUserId(value: RefereeUserId): void {
    if (!(value instanceof RefereeUserId)) {
      throw new InvalidRefereeUserIdInstanceError();
    }
  }
}
