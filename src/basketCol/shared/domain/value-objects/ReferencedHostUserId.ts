import { HostUserId } from '../../../users/host/domain/value-objects/HostUserId';
import { InvalidHostUserIdInstanceError } from '../exceptions/InvalidHostUserIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedHostUserId extends ValueObject<HostUserId> {
  protected constructor(value: string, propertyName: string = 'hostUserId') {
    const hostUserId: HostUserId = HostUserId.create(value);

    super(hostUserId, propertyName, 'string');

    this.ensureIsHostUserId(hostUserId);
  }

  public get hostUserIdAsString(): string {
    return this.value.value;
  }

  private ensureIsHostUserId(value: HostUserId): void {
    if (!(value instanceof HostUserId)) {
      throw InvalidHostUserIdInstanceError.create();
    }
  }
}
