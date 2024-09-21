import { UserType } from '../../../shared/domain/value-objects/UserType';

export class HostUserType extends UserType {
  protected static override readonly TYPE: string = 'HOST_USER';

  constructor() {
    super(HostUserType.TYPE);
  }

  public static override get value(): string {
    return HostUserType.TYPE;
  }
}
