import { UserType } from '../../../shared/domain/value-objects/UserType';

export class HostUserType extends UserType {
  protected readonly TYPE: string = 'HOST_USER';

  constructor() {
    super(HostUserType.value);
  }

  public static override get value(): string {
    return 'HOST_USER';
  }
}
